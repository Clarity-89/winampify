import React from "react";
import { MenuProvider } from "react-contexify";
import { GenericFile } from "../../types";
import "./file.css";
import bigWinampIcon from "./images/bigWinampIcon.png";
import folderclosed from "./images/folderclosed.png";
import InputRenaming from "./InputRenaming";
import { DesktopFileStyle } from "./styles";

interface Props {
  file: GenericFile;
  onClick?: (e: any) => void;
  onDoubleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  confirmRenameFile: (e: any) => void;
  selected: boolean;
}

const FileItem = (props: Props) => {
  const { file } = props;

  const getIcon = () => {
    switch (file.metaData.type) {
      case "track":
        return bigWinampIcon;
      case "album":
      case "action":
      case "artist":
        return folderclosed;
      case "image":
        return file.metaData.url;
      default:
        return bigWinampIcon;
    }
  };

  return (
    <MenuProvider id={file.metaData.type}>
      <div
        className="file-fadein"
        style={{
          width: "100px",
          position: "absolute",
          left: file.x,
          top: file.y,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        id={file.id}
        onMouseDown={props.onClick}
        onDoubleClick={props.onDoubleClick}
      >
        <img src={getIcon()} style={DesktopFileStyle.image} />
        {file.isRenaming ? (
          <InputRenaming
            initialValue={file.title}
            confirmRenameFile={props.confirmRenameFile}
          />
        ) : (
          <div
            style={{
              fontSize: "14px",
              textAlign: "center",
              color: "white",
              textShadow: "1px 1px black",
              backgroundColor: props.selected ? "#3064BD" : "transparent",
              border: props.selected
                ? "1px dotted white"
                : "1px dotted transparent",
              borderStyle: "dotted",
              boxSizing: "border-box"
            }}
          >
            {file.title}
          </div>
        )}
      </div>
    </MenuProvider>
  );
};

export default FileItem;
