import Upload from "../../icons/Upload";

interface Props {
  placeholder: string;
  showUploadIcon: boolean;
  inputMessage: string;
  handleInputChange: any;
  submitMessage: any;
  disabled: boolean;
}

export default function Input({
  placeholder,
  showUploadIcon,
  inputMessage,
  handleInputChange,
  submitMessage,
  disabled,
}: Props) {
  return (
    <div className="input-wraper">
      <form onSubmit={submitMessage}>
        <input
          type="inputType"
          className="input-modifer"
          placeholder={placeholder}
          value={inputMessage}
          onChange={handleInputChange}
          disabled={disabled}
        />
        <div className="input-icon-holder">
          {showUploadIcon ? <Upload /> : <></>}
        </div>
      </form>
    </div>
  );
}
