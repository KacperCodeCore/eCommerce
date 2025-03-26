import { NavLink } from '@remix-run/react';
import { createBoard, Variant } from '@wixc3/react-board';
import classNames from 'classnames';
import ComponentWrapper from '~/_codux/board-wrappers/component-wrapper';
import styles from '~/src/styles/ui-kit-buttons.module.scss';

export default createBoard({
    name: 'UI Kit - Buttons',
    Board: () => (
        <ComponentWrapper>
            <div className={styles.container}>
                <div>
                    <span className={styles.uikit}>UI Kit</span>
                    <span className={styles.coreComponents}>{' | '}Core Components</span>
                    <hr className={styles.hrSolid} />
                    <h3 className={styles.sectionTitle}>Buttons</h3>
                </div>

                <h4 className={styles.sectionHeader}>THEMED</h4>

                <div className={classNames(styles.buttonsContainer, styles.itemSpacing)}>
                    <div>
                        <Variant name="Primary Button">
                            <button className="primaryButton">Primary</button>
                        </Variant>
                        <span className={styles.buttonLabel}>Primary</span>
                    </div>

                    <div>
                        <Variant name="Secondary Button">
                            <button className="secondaryButton">Secondary</button>
                        </Variant>
                        <span className={styles.buttonLabel}>Secondary</span>
                    </div>
                </div>
                <hr className={styles.hrLight} />
                <h4 className={styles.sectionHeader}>MENU</h4>
                <Variant name="Menu">
                    <div className={classNames(styles.menu, styles.itemSpacing)}>
                        <NavLink to="/" className={({ isActive }) => classNames({ [styles.active]: isActive })}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => classNames({ [styles.active]: isActive })}>
                            About
                        </NavLink>
                    </div>
                </Variant>
                <h4 className={styles.sectionHeader}></h4>
                <Variant name="Social Media Row"></Variant>
            </div>
        </ComponentWrapper>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 321,
        windowHeight: 462,
    },
    tags: ['UI Kit'],
});
