const selector = {
    $ : (el) => document.querySelector(el),
    _$ : (el) => document.querySelectorAll(el),
};

module.exports = selector;