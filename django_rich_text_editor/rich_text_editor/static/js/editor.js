"use strict";

const init = () => {
  const richTextEditor = document.getElementById("rich-text-editor");
  const hiddenInput = document.getElementById("rich-text-input");
  const toolbarBoldBtn = document.getElementById("toolbar-bold");
  const toolbarItalicBtn = document.getElementById("toolbar-italic");
  const toolbarUnderlineBtn = document.getElementById("toolbar-underline");
  const toolbarStrikeBtn = document.getElementById("toolbar-strike");
  const toolbarSuperscriptBtn = document.getElementById("toolbar-superscript");
  const toolbarSubscriptBtn = document.getElementById("toolbar-subscript");
  const toolbarRemoveFormatBtn = document.getElementById(
    "toolbar-remove-format"
  );
  const toolbarListUnorderedBtn = document.getElementById(
    "toolbar-list-unordered"
  );
  const toolbarListOrderedBtn = document.getElementById("toolbar-list-ordered");
  const toolbarAlignLeftBtn = document.getElementById("toolbar-align-left");
  const toolbarAlignCenterBtn = document.getElementById("toolbar-align-center");
  const toolbarAlignRightBtn = document.getElementById("toolbar-align-right");
  const toolbarOutdentBtn = document.getElementById("toolbar-outdent");
  const toolbarIndentBtn = document.getElementById("toolbar-indent");
  const toolbarUndoBtn = document.getElementById("toolbar-undo");
  const toolbarRedoBtn = document.getElementById("toolbar-redo");
  const editorDropdownDisplay = document.getElementById(
    "editor-dropdown-display"
  );
  const editorDropdownOptions = document.getElementById(
    "editor-dropdown-options"
  );
  const editorFontsizeBtns = document.querySelectorAll(".editor-fontsize-btn");
  let editorContent = richTextEditor.innerHTML;
  hiddenInput.value = editorContent;

  const checkCommandState = (state, el) => {
    if (document.queryCommandState(state)) {
      el.classList.add("btn-active");
    } else {
      el.classList.contains("btn-active") && el.classList.remove("btn-active");
    }
  };

  const checkBtnsByCommandState = () => {
    checkCommandState("bold", toolbarBoldBtn);
    checkCommandState("italic", toolbarItalicBtn);
    checkCommandState("underline", toolbarUnderlineBtn);
    checkCommandState("strikeThrough", toolbarStrikeBtn);
    checkCommandState("superscript", toolbarSuperscriptBtn);
    checkCommandState("subscript", toolbarSubscriptBtn);
    checkCommandState("insertOrderedList", toolbarListOrderedBtn);
    checkCommandState("insertUnorderedList", toolbarListUnorderedBtn);
    checkCommandState("justifyLeft", toolbarAlignLeftBtn);
    checkCommandState("justifyCenter", toolbarAlignCenterBtn);
    checkCommandState("justifyRight", toolbarAlignRightBtn);
  };

  const execCommand = (command, params = []) => {
    document.execCommand(command, false, ...params);
    checkBtnsByCommandState();
  };

  toolbarBoldBtn.addEventListener("click", () => execCommand("bold"));
  toolbarItalicBtn.addEventListener("click", () => execCommand("italic"));
  toolbarUnderlineBtn.addEventListener("click", () => execCommand("underline"));
  toolbarStrikeBtn.addEventListener("click", () =>
    execCommand("strikeThrough", null)
  );
  toolbarSuperscriptBtn.addEventListener("click", () =>
    execCommand("superscript")
  );
  toolbarSubscriptBtn.addEventListener("click", () => execCommand("subscript"));
  toolbarRemoveFormatBtn.addEventListener("click", () =>
    execCommand("removeFormat")
  );
  toolbarListOrderedBtn.addEventListener("click", () =>
    execCommand("insertOrderedList")
  );
  toolbarListUnorderedBtn.addEventListener("click", () =>
    execCommand("insertUnorderedList")
  );
  toolbarAlignLeftBtn.addEventListener("click", () =>
    execCommand("justifyLeft")
  );
  toolbarAlignCenterBtn.addEventListener("click", () =>
    execCommand("justifyCenter")
  );
  toolbarAlignRightBtn.addEventListener("click", () =>
    execCommand("justifyRight")
  );
  toolbarOutdentBtn.addEventListener("click", () => execCommand("outdent"));
  toolbarIndentBtn.addEventListener("click", () => execCommand("indent"));
  toolbarUndoBtn.addEventListener("click", () => execCommand("undo"));
  toolbarRedoBtn.addEventListener("click", () => execCommand("redo"));

  richTextEditor.addEventListener("input", () => {
    hiddenInput.value = richTextEditor.innerHTML;
  });

  richTextEditor.addEventListener("keyup", checkBtnsByCommandState);
  richTextEditor.addEventListener("mouseup", checkBtnsByCommandState);

  editorDropdownDisplay.addEventListener("click", () => {
    editorDropdownDisplay.classList.toggle("opened");
    editorDropdownOptions.classList.toggle("opened");
  });

  editorFontsizeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const size = Number(btn.getAttribute("data-size"));
      execCommand("fontSize", [size]);
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  init();
});
