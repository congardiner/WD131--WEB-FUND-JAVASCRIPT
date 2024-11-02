// Need to add my javascript for my credit card form and the validation request for clearing it, ensuring that it runs accurately as needed.
// let and const 


// Test Case to ensure that my javascript is running as it should using the DOM Content


// edit notes:
// Want to integrate a eventListener for each of the textboxes
// Will display if it doesn't meet specific requirements for text length

// Card type detection and validation
class CreditCardForm {
    constructor() {
      // Initialize form elements
      // call tree for vertifying the class of functions and declaring them as linkable within the html.
      this.form = {
        cardNumber: document.getElementById('card-number'),
        cardHolder: document.getElementById('card-holder'),
        cardMonth: document.getElementById('card-month'),
        cardYear: document.getElementById('card-year'),
        cardCvc: document.getElementById('card-cvc'),
        submitButton: document.getElementById('card-btn'),
        cardFront: document.getElementById('card-front'),
        cardBack: document.getElementById('card-back'),
        cardImage: document.getElementById('card-image'),
        successMessage: document.getElementById('card-success'),
        errorMessage: document.getElementById('form-errors'),
        errorText: document.getElementById('card-error')
      };
  
      // Card type patterns
      // this was provided by claude, as I was experimenting with card types and how they work
      this.cardPatterns = {
        visa: {
          pattern: /^4/,
          icon: '<i class="fa fa-cc-visa"></i>'
        },
        mastercard: {
          pattern: /^5[1-5]/,
          icon: '<i class="fa fa-cc-mastercard"></i>'
        },
        amex: {
          pattern: /^3[47]/,
          icon: '<i class="fa fa-cc-amex"></i>'
        },
        discover: {
          pattern: /^6(?:011|5)/,
          icon: '<i class="fa fa-cc-discover"></i>'
        }
      };
  
      this.initializeEventListeners();
    }
  
    initializeEventListeners() {
      // Card number formatting and validation
      this.form.cardNumber.addEventListener('input', (e) => {
        this.formatCardNumber(e);
        this.updateCardType(e.target.value);
      });
  
      // Cardholder name formatting
      this.form.cardHolder.addEventListener('input', (e) => {
        this.formatCardHolder(e);
      });
  
      // Expiration date formatting
      this.form.cardMonth.addEventListener('input', (e) => {
        this.formatMonth(e);
      });
      this.form.cardYear.addEventListener('input', (e) => {
        this.formatYear(e);
      });
  
      // CVC handling
      this.form.cardCvc.addEventListener('focus', () => {
        this.flipCard(true);
      });
  
      this.form.cardCvc.addEventListener('blur', () => {
        this.flipCard(false);
      });
  
      this.form.cardCvc.addEventListener('input', (e) => {
        this.formatCVC(e);
      });
  
      // Submit button
      this.form.submitButton.addEventListener('click', () => {
        this.handleSubmit();
      });
    }
  
    formatCardNumber(e) {
      let value = e.target.value.replace(/\D/g, '');
      value = value.replace(/(\d{4})/g, '$1 ').trim();
      e.target.value = value.substring(0, 19); // Limit to 16 digits + 3 spaces
    }
  
    formatCardHolder(e) {
      let value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
      e.target.value = value.toUpperCase();
    }
  
    formatMonth(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.substring(0, 2);
        if (parseInt(value) > 12) value = '12';
      }
      e.target.value = value;
    }
  
    formatYear(e) {
      let value = e.target.value.replace(/\D/g, '');
      e.target.value = value.substring(0, 2);
    }
  
    formatCVC(e) {
      let value = e.target.value.replace(/\D/g, '');
      e.target.value = value.substring(0, 4);
    }
  
    updateCardType(number) {
      number = number.replace(/\s/g, '');
      for (let [type, data] of Object.entries(this.cardPatterns)) {
        if (data.pattern.test(number)) {
          this.form.cardImage.innerHTML = data.icon;
          return;
        }
      }
      this.form.cardImage.innerHTML = '';
    }

  
    validateForm() {
      const errors = [];
      
      // Card number validation
      const cardNumber = this.form.cardNumber.value.replace(/\s/g, '');
      if (!cardNumber || cardNumber.length < 15) {
        errors.push('Please enter a valid card number');
        this.form.cardNumber.classList.add('invalid');
      }
  
      // Cardholder validation
      if (!this.form.cardHolder.value.trim()) {
        errors.push('Please enter the cardholder name');
        // will accept any value as long as it is a char.
        this.form.cardHolder.classList.add('invalid');
      }
  
      // Expiration validation
      const month = parseInt(this.form.cardMonth.value);
      const year = parseInt(this.form.cardYear.value);
      // operator for the current year using getFullYear
      const currentYear = new Date().getFullYear() % 100;
      // operator for the current month
      const currentMonth = new Date().getMonth() + 1;
  
      if (!month || !year || month > 12 || 
          (year < currentYear || (year === currentYear && month < currentMonth))) {
        errors.push('Please enter a valid expiration date');
        errors.push('Cannot be less than current year, and month! Lets get validated here!')
        this.form.cardMonth.classList.add('invalid');
        this.form.cardYear.classList.add('invalid');
      }
  
      // CVC validation
      const cvc = this.form.cardCvc.value;
      // event comparision operator for if the length is greater or less than 3.
      if (!cvc || cvc.length < 3) {
        errors.push('Please enter a valid CVC/CVV (must be at least 3 num characters)');
        this.form.cardCvc.classList.add('invalid');
      }
  
      return errors;
    }
  
    showError(message) {
      this.form.errorText.textContent = message;
      this.form.errorMessage.classList.remove('hidden');
      this.form.successMessage.classList.add('hidden');
    }
  
    showSuccess() {
      this.form.successMessage.classList.remove('hidden');
      this.form.errorMessage.classList.add('hidden');

    // displays if payment was validated and completed according to the timeframe.
    }
  
    resetValidation() {
      const inputs = document.querySelectorAll('input');
      inputs.forEach(input => input.classList.remove('invalid'));
      this.form.errorMessage.classList.add('hidden');
      // 
      this.form.successMessage.classList.add('hidden');
    }
  
    // PROVIDES a submit screen that validates that the payment was successful.
    handleSubmit() {
      this.resetValidation();
      const errors = this.validateForm();
      
      if (errors.length > 0) {
        this.showError(errors[0]);
        return;
      }
  
      // Simulate payment processing
      this.form.submitButton.disabled = true;
      this.form.submitButton.textContent = 'Processing...';
  
      setTimeout(() => {
        this.showSuccess();
        this.form.submitButton.disabled = false;
        this.form.submitButton.textContent = 'Submit';
      }, 1500);
      // this provides a self-validator to determine if it was successful, 1500 to display as milliseconds in the timer.
    }
  }
  
  // Initialize the form when the DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    // provides a DOM event listener so that it can be accessed in the accessibility menu. //
    new CreditCardForm();
  });