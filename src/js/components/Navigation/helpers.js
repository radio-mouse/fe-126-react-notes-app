import searchIcon from '../../../assets/Search.svg';
import closeIcon from '../../../assets/Close.svg';
import editIcon from '../../../assets/Edit.svg';
import saveIcon from '../../../assets/Save.svg';

export const getButtonText = (isSearch, isDetail, isEdit) => {
  if (isSearch) {
    return 'Close Search';
  }

  if (isDetail) {
    return `${isEdit ? 'Save' : 'Edit'} Note`;
  }

  return 'Search';
};

export const getButtonIcon = (isSearch, isDetail, isEdit) => {
  if (isSearch) {
    return closeIcon;
  }

  if (isDetail) {
    return isEdit ? saveIcon : editIcon;
  }

  return searchIcon;
};
