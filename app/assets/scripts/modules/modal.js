import $ from 'jquery';

class ModalWindow {
  constructor() {
    this.$modalWindow = $('.modal');
    this.$modalCloseButton = $('.modal__close');
    this.$modalOpenButton = $('.modal-open');
    this.events();
  }

  events() {
    this.$modalOpenButton.on('click', this.openModal.bind(this));
    this.$modalCloseButton.on('click', this.closeModal.bind(this));
    $(document).on('keyup', this.keyupHandler.bind(this));
  }

  openModal() {
    this.$modalWindow.addClass('modal--show');
  }

  closeModal() {
    this.$modalWindow.removeClass('modal--show');
  }

  keyupHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

}

export default ModalWindow;