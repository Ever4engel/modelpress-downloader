const React = require("react");
const i18n = require("../i18n");
const SupportedSites = require("./supported-sites");
const logger = require("../logger2")(module.id);
const window = require("../globals").getWindow();

function DownloadButton(props) {
    document.title = "Download Button";
    let text;
    let disabled = props.disabled;
    if (props.count) {
        text = i18n.getText("downloadButtonMessage", null, [props.count]);
    } else {
        disabled = true;
        if (props.loading) {
            text = "⌛";
        } else {
            text = i18n.getText("noImageMessage")
        }
    }

    return (
        <button id="download" className="row" disabled={disabled ? "disabled": null} onClick={props.onClick}>
            <span id="buttonText"><span id="count">{text}</span></span>
        </button>
    );

}

function DownloadMobileStatus(props) {
    let helpLink = props.appFetchStatus === "error" ?
        (<a id="downloadMobileStatusHelpLink" href={i18n.getText("downloadMobileStatusFailedHelp")}>?</a>)
        : null;
    let downloadMobileStatusText;
    switch (props.appFetchStatus) {
        case "started":
            downloadMobileStatusText = i18n.getText("downloadMobileStatusTextInProgress");
            break;
        case "200":
            downloadMobileStatusText = i18n.getText("downloadMobileStatusTextSuccess", null, [props.appImageCount])
            break;
        case "404":
            downloadMobileStatusText = i18n.getText("downloadMobileStatusTextNotFound");
            break;
        case "error": // fall through to default case
        default:
            downloadMobileStatusText = i18n.getText("downloadMobileStatusTextFailed");
    }

    return (
        <div id="downloadMobileStatus" className="row">
            <span id="downloadMobileStatusText">
                {downloadMobileStatusText}
            </span>
            {helpLink}
        </div>
    );
}

class PopupComponent extends React.Component {
    constructor(props) {
        super(props);
        logger.debug("initializing with props", props);
        this.state = {
            supported: props.supported,
            count: props.count,
            loading: props.loading,
            hasAppImage: props.hasAppImage,
            hasAppPerm: props.hasAppPerm,
            appFetchStatus: props.appFetchStatus, // null, "started", "200", "404", "error"
            appImageCount: props.appImageCount,
            downloadDisabled: false,
        };
        this.downloadHandler = props.downloadHandler;
        this.downloadClicked = this.downloadClicked.bind(this);
    }

    downloadClicked() {
        this.setState({
            downloadDisabled: true
        });
        this.downloadHandler(function (){
            window.close();
        });
    }

    render() {
        let st = this.state;
        if (st.supported) {
            let permOrStatus;
            if (st.hasAppImage) {
                if (!st.hasAppPerm) {
                    permOrStatus = <DownloadMobileStatus
                        appFetchStatus="error"
                        appImageCount={st.appImageCount}
                    />;
                } else {
                    permOrStatus = <DownloadMobileStatus
                        appFetchStatus={st.appFetchStatus}
                        appImageCount={st.appImageCount}
                    />;
                }
            }

            return (
                <div>
                    <DownloadButton
                        count={st.count}
                        loading={st.loading}
                        onClick={this.downloadClicked}
                        disabled={this.state.downloadDisabled}
                    />
                    {permOrStatus}
                </div>
            );
        } else {
            return <SupportedSites />
            // return <SupportedSites />
            // TODO double check support link
        }
    }
}

exports.DownloadButton = DownloadButton;
exports.DownloadMobileStatus = DownloadMobileStatus;
exports.PopupComponent = PopupComponent;
