import css from '../Styles/Layout.module.scss'

function Layout(props) {
  return <div className={css.layout}>{props.children}</div>
}

export default Layout