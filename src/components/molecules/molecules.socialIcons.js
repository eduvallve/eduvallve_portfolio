import i18n from '../../i18n'

const SocialIcons = () => {
  return (
    <div className="social__icons">
      <a target="_blank" rel="noreferrer" aria-label={i18n.t('a11y.linkTo') + ' LinkedIn'} href="https://www.linkedin.com/in/eduvallve/">
        <i className="icon social__icon social__icon-linkedin"></i>
      </a>
      <a target="_blank" rel="noreferrer" aria-label={i18n.t('a11y.linkTo') + ' GitHub'} href="https://github.com/eduvallve">
        <i className="icon social__icon social__icon-github"></i>
      </a>
      <a target="_blank" rel="noreferrer" aria-label={i18n.t('a11y.linkTo') + ' CodePen'} href="https://codepen.io/eduvallve">
        <i className="icon social__icon social__icon-codepen"></i>
      </a>
      <a target="_blank" rel="noreferrer" aria-label={i18n.t('a11y.linkTo') + ' Behance'} href="https://www.behance.net/eduvallve" >
        <i className="icon social__icon social__icon-behance" style={{"--icon-color": "#f9861a"}}></i>
      </a>
      <a target="_blank" rel="noreferrer" aria-label={i18n.t('a11y.linkTo') + ' Vimeo'} href="https://vimeo.com/eduvallve">
        <i className="icon social__icon social__icon-vimeo" style={{"--icon-color": "#dbdbdb"}}></i>
      </a>
    </div>
  );
};

export default SocialIcons;
