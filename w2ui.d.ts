// Type definitions for w2ui 1.5.0
// Project: http://w2ui.com/
// Definitions by: Valentin Robert <https://github.com/Ptival>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JQuery<TElement = HTMLElement> {
    w2layout(options: Object): W2UI.W2Layout;
    w2grid(options: W2UI.W2Grid.Options): W2UI.W2Grid;
    w2toolbar(options: Object): W2UI.W2Toolbar;
    w2sidebar(options: Object): W2UI.W2Sidebar;
    w2tabs(options: Object): W2UI.W2Tabs;
    w2form(options: Object): W2UI.W2Form;
    w2popup(options: Object): W2UI.W2Popup;
    w2overlay(options: string): JQuery<TElement>;
    w2overlay(options: W2UI.W2Overlay.Options): JQuery<TElement>;
}

declare var w2popup: W2UI.W2Popup;
declare var w2ui: W2UI.W2UI;
declare var w2utils: W2UI.W2Utils;

declare namespace W2UI {
    type TransitionType = 'slide-left' | 'slide-right' | 'slide-down' | 'slide-up' | 'flip-left' | 'flip-right' | 'flip-down' | 'flip-up' | 'pop-in' | 'pop-out';
    interface W2Utils {
        obj: {
            version: string;
            settings: {
                [key: string]: any;
            };
        }
        tmp: Object;
        isBin(value: any): boolean;
        isInt(value: any): boolean;
        isFloat(value: any): boolean;
        isMoney(value: any): boolean;
        isHex(value: any): boolean;
        isAlphaNumeric(value: any): boolean;
        isEmail(value: any): boolean;
        isIpAddress(value: any): boolean;
        isDate(value: any, format?: string, retData?: boolean): boolean | Date;
        isTime(value: any, retTime?: boolean): boolean | { hours: number, minutes: number, seconds: number };
        isDateTime(value: any, format?: string, retData?: boolean): boolean | Date;
        isInt(value: any, format?: string, retData?: boolean): boolean | Date;
        age(dateStr: string | Date | number): string;
        interval(value: number): string;
        date(dateStr: string | Date | number): string;
        formatSize(sizeStr: string | number): string;
        formatNumber(value: string | number, fraction?: number, useGrouping?: boolean): string;
        formatDate(dateStr: string | Date | number, format?: string): string;
        formatTime(dateStr: string | Date | number, format?: string): string;
        formatDateTime(dateStr: string | Date | number, format?: string): string;
        stripTags(html: Object): Object;
        stripTags(html: string): string;
        encodeTags(html: Object): Object;
        encodeTags(html: string): string;
        decodeTags(html: Object): Object;
        decodeTags(html: string): string;
        escapeId(id: string): string;
        base64encode(input: any): string;
        base64decode(input: any): string;
        md5(input: any): string;
        transition(div_old: HTMLElement, div_new: HTMLElement, type?: TransitionType, callback?: () => void): void;
        lock(box: HTMLElement | string, msg: {msg?: string, spinner?: boolean} | string, spinner?: boolean): void;
        unlock(box: HTMLElement | string, speed?: number): void;
        /**
         * Used in w2popup, w2grid, w2form, w2layout
         * should be called with .call(...) method
         */
        message(
            where: {
                box?: HTMLElement, 
                param?: HTMLElement | string, 
                path?: string, 
                title?: string, 
                body?: string}, 
            options?: {
                width?: number, 
                height?: number,
                html?: string,
                body?: string, 
                buttons?: string, 
                hideOnClick?: boolean,
                on?: (type: string, event: any) => void, 
                onOpen?: (event: any) => void, 
                onClose?: (event: any) => void
            }): void;
        getSize(element: HTMLElement | string, type: 'top' | 'bottom' | 'left' | 'right' | 'width' | 'height' | '+width' | '+height'): number;
        getStrWidth(string: string, styles?: string): number;
        lang(phrase: string): string;
        locale(locale?: string | Object, callback?: () => void): void;
        scrollBarSize(): number;
        checkName(params?: {name: string}, component?: string): boolean;
        checkUniqueId(id: string, items: {id: string} | {id: string}[], itemsDescription?: string, objName?: string): boolean;
        parseRoute(route: string): {path: RegExp, keys: {name: string, optional: boolean}[]};
        cssPrefix(field: string | Object, value?: any, returnString?: boolean): string;
        getCursorPosition(input: HTMLElement): number;
        setCursorPosition(input: HTMLElement, pos: number, posEnd?: number): void;
        testLocaleStorage(): boolean;
        parseColor(string: string): {r:number, g: number, b: number, a: number} | null;
        hsv2rgb(h: number, s: number, v: number, a?: number): {r:number, g: number, b: number, a: number};
        rgb2hsv(r: number, g: number, b: number, a?: number): {r:number, g: number, b: number, a: number};
        tooltip(msg: string, options?: {showOn?: string, hideOn?: string}): string;
        naturalCompare(a: any, b: any): 1 | -1 | 0;
    }

    interface W2Event {
        done: (event: W2Event) => void;
        doneHandlers: ((event: W2Event) => void)[];
        isCancelled: boolean;
        isStopped: boolean;
        phase: string;
        onComplete: () => void;
        target: string;
        type: string;
        preventDefault(): void;
        stopPropagation(): void;
    }

    type W2EventHandler = ((event: W2Event) => void) | ((id: string, event: W2Event) => void)

    /* Primitives (first alphabetically, then by documentation order) */

    interface W2Item {
        /** down arrow for drop/menu types, default = true */
        arrow?: boolean;
        /** indicates if item is checked, default = false */
        checked?: boolean | undefined;
        /** DEPRECATED - use "text" instead */
        caption?: string | undefined;
        /** color value - used in color pickers, default = null */
        color?: string;
        /** count badge, default = null */
        count?: any;
        /** indicates if item is disabled, default = false */
        disabled?: boolean;
        /** group name for the item, used for radio buttons, default = null */
        group?: number | string | undefined;
        /** indicates if item is hidden, default = false */
        hidden?: boolean;
        /** html text for the item (only if type = html), default = '' */
        html?: string | Function | (() => string);
        /** css class of the icon font for the item, default = '' */
        icon?: string;
        /** id of the item, default = null */
        id?: string | undefined;
        /** css class of the image for the item, default = '' */
        img?: string | undefined;
        /** for type = menu it is an array of items in the menu */
        items?: W2Item[] | undefined;
        /** click event handler for this item only */
        onClick?: Function | undefined;
        /** refresh event handler for this item only */
        onRefresh?: Function;
        /** for drop down menus additional params for overlay */
        overlay?: any;
        /** route to follow, can have dynamic parts as /item/:id/details */
        route?: string;
        /** id or array of ids of the selected item(s) for menu-check and menu-radio */
        selected?: string | string[];
        /** extra css style for caption, default = null */
        style?: string;
        /** caption of the item, can be string or function */
        text?: string | undefined;
        /** tooltip for the item, default = null */
        tooltip?: string | Function | (() => string);
        /** transparent flag - used in color pickers, default = null */
        transparent?: boolean;
        /** type of the item, default = 'button' */
        type?: 'button' | 'check' | 'radio' | 'drop' | 'menu' | 'break' | 'spacer' | 'html';
    }

    type W2Object = W2Layout | W2Grid | W2Toolbar | W2Sidebar | W2Tabs | W2Form | W2Popup

    interface W2Panel {
        content?: string | JQuery | undefined;
        hidden?: boolean | undefined;
        overflow?: string | undefined;
        resizable?: boolean | undefined;
        size?: number | string | undefined;
        style?: string | undefined;
        title?: string | undefined;
        tabs?: W2Tabs | undefined;
        type?: string | undefined;
    }

    interface W2Tab {
        caption?: string | undefined;
        id?: string | undefined;
    }

    interface W2UI {
        // morally, [s: string]<T extends W2Common>: T;
        [s: string]: any;
    }

    interface W2Common {
        box: HTMLElement;
        handlers: Function[];
        name: string;
        style: string;
        destroy(): void;
        off(type: string | Object, handler?: Function): void;
        on(type: string | Object, handler?: Function): void;
        refresh(id?: string): number;
        render(box?: Object): number;
        resize(): number;
        trigger(eventData: Object): Object;
    }

    interface W2Layout extends W2Common {
        padding: number;
        panels: W2Panel[];
        resizer: number;
        tmp: Object;
        content(type: string): HTMLElement[] | W2Object;
        content(type: string, content: HTMLElement | Object, transition?: string): void;
        el(type: string): HTMLElement;
        get(type: string): W2Panel;
        hide(type: string, immediate?: boolean): void;
        hideTabs(type: string): void;
        hideToolbar(type: string): void;
        html(type: string): string;
        html(type: string, content?: string | Object, transition?: string): void;
        load(type: string, url: string, transition?: string, onLoad?: Function): void;
        lock(panel: string, message: string, showSpinner?: boolean): void;
        set(type: string, panel: Object): void;
        show(type: string, immediate?: boolean): void;
        showTabs(type: string): void;
        showToolbar(type: string): void;
        sizeTo(type: string, size: number): void;
        toggle(type: string, immediate?: boolean): void;
        toggleTabs(type: string): void;
        toggleToolbar(type: string): void;
        unlock(panel: string): void;
    }

    namespace W2Grid {
        interface Options {
            autoLoad?: boolean;
            dataType?: string;
            keyboard?: boolean;
            menu?: any[];
            reorderColumns?: boolean;
            reorderRows?: boolean;
            toolbar?: W2Toolbar;
            name?: string;
            columns?: Column[];
            records?: Record[];
            onAdd?: W2Grid.AddHandler;
            onChange?: W2Grid.ChangeHandler;
            onClick?: W2Grid.ClickHandler;
            onCollapse?: W2Grid.CollapseHandler;
            onColumnAutoResize?: W2Grid.ColumnAutoResizeHandler;
            onColumnClick?: W2Grid.ColumnClickHandler;
            onColumnDragEnd?: W2Grid.ColumnDragEndHandler;
            onColumnDragStart?: W2Grid.ColumnDragStartHandler;
            onColumnOnOff?: W2Grid.ColumnOnOffHandler;
            onColumnResize?: W2Grid.ColumnResizeHandler;
            onColumnSelect?: W2Grid.ColumnSelectHandler;
            onContextMenu?: W2Grid.ContextMenuHandler;
            onCopy?: W2Grid.ContextMenuHandler;
            onDblClick?: W2Grid.ContextMenuHandler;
            onDelete?: W2Grid.ContextMenuHandler;
            onEdit?: W2Grid.ContextMenuHandler;
            onEditField?: W2Grid.ContextMenuHandler;
            onError?: W2Grid.ContextMenuHandler;
            onExpand?: W2Grid.ExpandHandler;
            onKeydown?: W2Grid.ExpandHandler;
            onLoad?: W2Grid.ExpandHandler;
            onMenuClick?: W2Grid.ExpandHandler;
            onPaste?: W2Grid.ExpandHandler;
            onReload?: W2Grid.ExpandHandler;
            onRequest?: W2Grid.RequestHandler;
            onResizerDblClick?: W2Grid.RequestHandler;
            onRestore?: W2Grid.RequestHandler;
            onSave?: W2Grid.RequestHandler;
            onSearch?: W2Grid.RequestHandler;
            onSelect?: W2Grid.RequestHandler;
            onSelectionExtend?: W2Grid.RequestHandler;
            onSort?: W2Grid.RequestHandler;
            onStateRestore?: W2Grid.RequestHandler;
            onStateSave?: W2Grid.RequestHandler;
            onSubmit?: W2Grid.RequestHandler;
            onToolbar?: W2Grid.RequestHandler;
            onUnselect?: W2Grid.RequestHandler;
        }
        interface Columns { }
        interface Column {
            field?: string;
            text?: string;
            size?: string;
        }
        interface Ranges { }
        interface Records { }
        interface Record {
            recid?: string | number;
            children?: Record[];
            [key: string]: any;
        }
        namespace Events {
            interface AddEvent extends W2Event {
                type: 'add';
            }
            interface ChangeEvent extends W2Event {
                type: 'change';
            }
            interface ClickEvent extends W2Event {
                column?: number;
                recid?: string;
                originalEvent: PointerEvent;
                type: 'click';
            }
            interface CollapseEvent extends W2Event {
                type: 'collapse';
            }
            interface ColumnAutoResizeEvent extends W2Event {
                type: 'columnAutoResize';
            }
            interface ColumnClickEvent extends W2Event {}
            interface ColumnDragEndEvent extends W2Event {}
            interface ColumnDragStartEvent extends W2Event {}
            interface ColumnOnOffEvent extends W2Event {}
            interface ColumnResizeEvent extends W2Event {}
            interface ColumnSelectEvent extends W2Event {}
            interface ContextMenuEvent extends W2Event {
                column?: number;
                recid?: string;
                originalEvent: PointerEvent;
                type: 'contextMenu';
            }
            interface CopyEvent extends W2Event {}
            interface DblClickEvent extends W2Event {}
            interface DeleteEvent extends W2Event {}
            interface EditEvent extends W2Event {}
            interface EditFieldEvent extends W2Event {}
            interface ErrorEvent extends W2Event {}
            interface ExpandEvent extends W2Event {
                box_id: string;
                fbox_id: string;
                type: 'expand';
            }
            interface KeydownEvent extends W2Event {
                originalEvent: KeyboardEvent;
                type: 'keydown';
            }
            interface LoadEvent extends W2Event {}
            interface MenuClickEvent extends W2Event {}
            interface PasteEvent extends W2Event {}
            interface ReloadEvent extends W2Event {}
            interface RequestEvent extends W2Event {}
            interface ResizerDblClickEvent extends W2Event {}
            interface RestoreEvent extends W2Event {}
            interface SaveEvent extends W2Event {}
            interface SearchEvent extends W2Event {}
            interface SelectEvent extends W2Event {
                column?: number;
                recid?: string;
                type: 'select'
            }
            interface SelectionExtendEvent extends W2Event {}
            interface SortEvent extends W2Event {}
            interface StateRestoreEvent extends W2Event {}
            interface StateSaveEvent extends W2Event {}
            interface SubmitEvent extends W2Event {}
            interface ToolbarEvent extends W2Event {}
            interface UnselectEvent extends W2Event {
                recids?: string[];
                type: 'unselect'
            }
        }
        type AddHandler = (event: W2Grid.Events.AddEvent) => void;
        type ChangeHandler = (event: W2Grid.Events.ChangeEvent) => void;
        type ClickHandler = (event: W2Grid.Events.ClickEvent) => void;
        type CollapseHandler = (event: W2Grid.Events.CollapseEvent) => void;
        type ColumnAutoResizeHandler = (event: W2Grid.Events.ColumnAutoResizeEvent) => void;
        type ColumnClickHandler = (event: W2Grid.Events.ColumnClickEvent) => void;
        type ColumnDragEndHandler = (event: W2Grid.Events.ColumnDragEndEvent) => void;
        type ColumnDragStartHandler = (event: W2Grid.Events.ColumnDragStartEvent) => void;
        type ColumnOnOffHandler = (event: W2Grid.Events.ColumnOnOffEvent) => void;
        type ColumnResizeHandler = (event: W2Grid.Events.ColumnResizeEvent) => void;
        type ColumnSelectHandler = (event: W2Grid.Events.ColumnSelectEvent) => void;
        type ContextMenuHandler = (event: W2Grid.Events.ContextMenuEvent) => void;
        type CopyHandler = (event: W2Grid.Events.ContextMenuEvent) => void;
        type DblClickHandler = (event: W2Grid.Events.ContextMenuEvent) => void;
        type DeleteHandler = (event: W2Grid.Events.ContextMenuEvent) => void;
        type EditHandler = (event: W2Grid.Events.ContextMenuEvent) => void;
        type EditFieldHandler = (event: W2Grid.Events.ContextMenuEvent) => void;
        type ErrorHandler = (event: W2Grid.Events.ContextMenuEvent) => void;
        type ExpandHandler = (event: W2Grid.Events.ExpandEvent) => void;
        type KeydownHandler = (event: W2Grid.Events.ExpandEvent) => void;
        type LoadHandler = (event: W2Grid.Events.ExpandEvent) => void;
        type MenuClickHandler = (event: W2Grid.Events.ExpandEvent) => void;
        type PasteHandler = (event: W2Grid.Events.ExpandEvent) => void;
        type ReloadHandler = (event: W2Grid.Events.ExpandEvent) => void;
        type RequestHandler = (event: W2Grid.Events.RequestEvent) => void;
        type ResizerDblClickHandler = (event: W2Grid.Events.RequestEvent) => void;
        type RestoreHandler = (event: W2Grid.Events.RequestEvent) => void;
        type SaveHandler = (event: W2Grid.Events.RequestEvent) => void;
        type SearchHandler = (event: W2Grid.Events.RequestEvent) => void;
        type SelectHandler = (event: W2Grid.Events.RequestEvent) => void;
        type SelectionExtendHandler = (event: W2Grid.Events.RequestEvent) => void;
        type SortHandler = (event: W2Grid.Events.RequestEvent) => void;
        type StateRestoreHandler = (event: W2Grid.Events.RequestEvent) => void;
        type StateSaveHandler = (event: W2Grid.Events.RequestEvent) => void;
        type SubmitHandler = (event: W2Grid.Events.RequestEvent) => void;
        type ToolbarHandler = (event: W2Grid.Events.RequestEvent) => void;
        type UnselectHandler = (event: W2Grid.Events.RequestEvent) => void;
    }

    interface W2Grid extends W2Common {
        autoLoad: boolean;
        buttons: Object;
        columnGroups: Object[];
        columns: W2Grid.Column[];
        fixedBody: boolean;
        header: string;
        keyboard: boolean;
        last: Object;
        limit: number;
        markSearch: boolean;
        menu: Object[];
        method: string;
        msgAJAXerror: string;
        msgDelete: string;
        msgNotJSON: string;
        msgRefresh: string;
        multiSearch: boolean;
        multiSelect: boolean;
        multiSort: boolean;
        offset: number;
        onAdd?: W2Grid.AddHandler;
        onChange?: W2Grid.ChangeHandler;
        onClick?: W2Grid.ClickHandler;
        onCollapse?: W2Grid.CollapseHandler;
        onColumnAutoResize?: W2Grid.ColumnAutoResizeHandler;
        onColumnClick?: W2Grid.ColumnClickHandler;
        onColumnDragEnd?: W2Grid.ColumnDragEndHandler;
        onColumnDragStart?: W2Grid.ColumnDragStartHandler;
        onColumnOnOff?: W2Grid.ColumnOnOffHandler;
        onColumnResize?: W2Grid.ColumnResizeHandler;
        onColumnSelect?: W2Grid.ColumnSelectHandler;
        onContextMenu?: W2Grid.ContextMenuHandler;
        onCopy?: W2Grid.ContextMenuHandler;
        onDblClick?: W2Grid.ContextMenuHandler;
        onDelete?: W2Grid.ContextMenuHandler;
        onEdit?: W2Grid.ContextMenuHandler;
        onEditField?: W2Grid.ContextMenuHandler;
        onError?: W2Grid.ContextMenuHandler;
        onExpand?: W2Grid.ExpandHandler;
        onKeydown?: W2Grid.ExpandHandler;
        onLoad?: W2Grid.ExpandHandler;
        onMenuClick?: W2Grid.ExpandHandler;
        onPaste?: W2Grid.ExpandHandler;
        onReload?: W2Grid.ExpandHandler;
        onRequest?: W2Grid.RequestHandler;
        onResizerDblClick?: W2Grid.RequestHandler;
        onRestore?: W2Grid.RequestHandler;
        onSave?: W2Grid.RequestHandler;
        onSearch?: W2Grid.RequestHandler;
        onSelect?: W2Grid.RequestHandler;
        onSelectionExtend?: W2Grid.RequestHandler;
        onSort?: W2Grid.RequestHandler;
        onStateRestore?: W2Grid.RequestHandler;
        onStateSave?: W2Grid.RequestHandler;
        onSubmit?: W2Grid.RequestHandler;
        onToolbar?: W2Grid.RequestHandler;
        onUnselect?: W2Grid.RequestHandler;
        parser: Function;
        postData: Object;
        ranges: Object[];
        recid: string;
        recordHeight: number;
        records:  W2Grid.Record[];
        reorderColumns: boolean;
        reorderRows: boolean;
        routeData: string;
        searchData: Object[];
        searches: Object[];
        selectType: string;
        show: {toolbar?: boolean};
        sortData: Object[];
        summary: Object[];
        toolbar: Object;
        total: number;
        url: string;
        add(record: W2Grid.Records | W2Grid.Records[]): number;
        addColumn(column: W2Grid.Columns | W2Grid.Columns[]): number;
        addColumn(before: string | number, column: W2Grid.Columns | W2Grid.Columns[]): number;
        addRange(range: W2Grid.Ranges | W2Grid.Ranges[]): number;
        addSearch(search: Object | Object[]): number;
        addSearch(before: string | number, search: Object | Object[]): number;
        clear(noRefresh?: boolean): void;
        click(recid: string, event?: Object): void;
        collapse(recid: string): boolean;
        columnClick(field: string, event?: Object): boolean;
        columnOnOff(el: HTMLElement, event: Object, field: string, value: number): void;
        contextMenu(recid: string, event?: Object): void;
        copy(): string;
        dblClick(recid: string, event?: Object): void;
        delete(force: boolean): void;
        editField(recid: string, column: number, value?: string, event?: Object): void;
        error(msg: string): void;
        expand(recid: string): boolean;
        find(match: Object, returnIndex?: boolean): Object[] | number[];
        get(recid: string, returnIndex?: boolean): Object | number | void;
        getCellHTML(index: number, columnIndex: number, summary?: boolean): string;
        getCellValue(index: number, columnIndex: number, summary?: boolean): string;
        getChanges(): Object[];
        getColumn(field: string, returnIndex?: boolean): Object | number | void;
        getColumnsHTML(): string;
        getFooterHTML(): string;
        getRangeData(range: Object, extra?: boolean): Object[][];
        getRecordHTML(index: number, lineNumber: number, summary?: boolean): string;
        getRecordsHTML(): string;
        getSearch(field: string, returnIndex?: boolean): Object | number | void;
        getSearchData(field: string): Object | void;
        getSearchesHTML(): string;
        getSelection(): Object[]; // the doc is weird here
        getSummaryHTML(): string;
        hideColumn(...fields: string[]): number;
        hideSearch(...fields: string[]): number;
        initAllField(field: string, value?: string): void;
        initColumnOnOff(): void;
        //initOperator(el, searchInd): void; // this is used internally
        initResize(): void;
        initSearches(): void;
        initToolbar(): void;
        keydown(event: Object): void;
        load(url: string, callback?: Function): void;
        localSearch(silent?: boolean): number;
        localSort(silent?: boolean): number;
        lock(message: string, showSpinner?: boolean): void;
        menuClick(recid: string, index: number, event: Object): void;
        mergeChanges(): void;
        nextCell(colInd: number, editable: boolean): number | void;
        nextRow(index: number): number | void;
        parseField(obj: Object, field: string): any;
        paste(text: string): void;
        prevCell(colInd: number, editable: boolean): number | void;
        prevRow(index: number): number | void;
        refreshCell(recid: string, field: string): void;
        refreshRanges(): number;
        refreshRow(recid: string): void;
        reload(callback?: Function): void;
        remove(...recids: string[]): number;
        removeColumn(...fields: string[]): number;
        removeRange(...rangeNames: string[]): number;
        removeSearch(...fields: string[]): number;
        request(cmd: string, params?: Object, url?: string, callback?: Function): void;
        requestComplete(status: string, cmd: string, callback?: Function): void;
        reset(noRefresh?: boolean): void;
        resizeBoxes(): void;
        resizeRecords(): void;
        save(): void;
        scroll(event: Object): void;
        scrollIntoView(ind: number): void;
        search(field: string, value: string): void;
        search(searches: Object[], logic?: string): void;
        searchClose(): void;
        searchOpen(): void;
        searchReset(noRefresh?: boolean): void;
        searchShowFields(): void;
        select(...recids: string[]): number;
        selectAll(): void;
        selectNone(): void;
        set(record: Object, noRefresh?: boolean): boolean;
        set(recid: string, record: Object, noRefresh?: boolean): boolean;
        showColumn(...fields: string[]): number;
        showSearch(...fields: string[]): number;
        skip(offset: number): number;
        sort(): void;
        sort(field: string, direction?: string, multiField?: boolean): void;
        stateReset(): void;
        stateRestore(stateObj?: Object): Object | void;
        stateSave(returnOnly?: boolean): Object | void;
        status(msg?: string): void;
        toggle(recid: string): void;
        toggleColumn(...fields: string[]): number;
        toggleSearch(...fields: string[]): number;
        toolbarAdd(): void;
        toolbarDelete(force?: boolean): void;
        unlock(): void;
        unselect(...recids: string[]): number;
    }

    interface W2Toolbar extends W2Common, W2OnClickable {
        items?: W2Item[];
        right?: string;
        routeData?: string;
        add?(items: Object | Object[]): void;
        check?(...ids: string[]): number;
        click?(id: string, event?: Object): void;
        disable?(...ids: string[]): number;
        enable?(...ids: string[]): number;
        get?(id: string, returnIndex?: boolean): Object | number | void;
        getItemHTML?(item: Object): string;
        hide?(...ids: string[]): number;
        insert?(before: string, items: Object | Object[]): void;
        menuClick?(id: string, menuIndex: number, event?: Object): void;
        remove?(...ids: string[]): number;
        set?(id: string, item: Object): boolean;
        show?(...ids: string[]): number;
        uncheck?(...ids: string[]): number;
    }

    interface W2Sidebar extends W2Common, W2OnClickable {
        bottomHTML: string;
        icon: string;
        img: string;
        keyboard: boolean;
        menu: Object[];
        nodes: Object[];
        parent: W2Common;
        routeData: string;
        selected: string;
        sidebar: Object;
        topHTML: string;
        add(nodes: Object | Object[]): Object;
        add(parent: string, nodes: Object | Object[]): Object;
        click(id: string, event?: Object): void;
        collapse(id: string): void;
        collapseAll(parent?: string): void;
        contextMenu(id: string, event?: Object): void;
        dblClick(id: string, event?: Object): void;
        disable(...ids: string[]): number;
        enable(...ids: string[]): number;
        expand(id: string): void;
        expandAll(parent?: string): void;
        expandParents(id: string): void;
        find(attrs: Object): Object[];
        find(parent: string, attrs: Object): Object[];
        get(): Object | number | void;
        get(id: string, returnIndex?: boolean): Object | number | void;
        get(parent: string, id: string, returnIndex?: boolean): Object | number | void;
        hide(...ids: string[]): number;
        insert(before: string | Object, nodes: Object | Object[]): Object;
        insert(parent: string, before: string | Object, nodes: Object | Object[]): Object;
        keydown(event: Object): void;
        lock(message: string, showSpinner?: boolean): void;
        menuClick(id: string, index: number, event?: Object): void;
        remove(...ids: string[]): number;
        scrollIntoView(id?: string): void;
        select(id: string): void;
        set(id: string, node: Object): boolean;
        set(parent: string, id: string, node: Object): boolean;
        show(...ids: string[]): number;
        toggle(id: string): void;
        unlock(): void;
        unselect(id: string): boolean;
    }

    interface W2Tabs extends W2Common, W2OnClickable {
        active: string;
        right: string;
        routeData: string;
        tabs: W2Tab[];
        add(tabs: Object | Object[]): void;
        animateClose(id: string, event?: Object | Object[]): void;
        animateInsert(before: string, tabs: Object | Object[]): void;
        click(id: string, event?: Object): void;
        disable(...ids: string[]): number;
        enable(...ids: string[]): number;
        get(id: string, returnIndex?: boolean): Object | number | void;
        hide(...ids: string[]): number;
        insert(before: string, tabs: Object | Object[]): void;
        remove(...ids: string[]): number;
        select(id: string): boolean;
        set(id: string, tab: Object): boolean;
        show(...ids: string[]): number;
    }

    interface W2Form extends W2Common {
        actions: Object;
        fields: Object[];
        focus: number;
        formHTML: string;
        formURL: string;
        header: string;
        isGenerated: boolean;
        last: Object;
        msgAJAXerror: string;
        msgNotJSON: string;
        msgRefresh: string;
        msgSaving: string;
        original: Object;
        page: number;
        postData: Object;
        recid: number;
        record: Object;
        routeData: string;
        tabs: Object;
        toolbar: Object;
        url: string;
        action(action: string, event?: Object): void;
        clear(): void;
        error(msg: string): void;
        generateHTML(): string;
        get(): Object | number | void;
        get(field: string, returnIndex?: boolean): Object | number | void;
        getChanges(): Object;
        goto(page: number): void;
        lock(message: string, showSpinner?: boolean): void;
        reload(callback?: Function): void;
        request(postData?: Object, callback?: Function): void;
        save(postData?: Object, callback?: Function): void;
        set(field: string, obj: Object): boolean;
        submit(postData?: Object, callback?: Function): void;
        unlock(): void;
        validate(showErrors?: boolean): Object[];
    }

    interface W2Popup extends W2Common {

        defaults: Object;
        status: string;
        clear(): void;
        close(): void;
        get(): Object;
        keydown(event: Object): void;
        load(options: Object): void;
        lock(message: string, showSpinner?: boolean): void;
        lockScreen(options?: Object): void;
        max(): void;
        message(msgOptions: Object): void;
        min(): void;
        open(options: Object): void;
        reset(): void;
        resize(): void;
        resize(width?: number, height?: number, callback?: Function): number;
        set(options: Object): void;
        toggle(): void;
        unlock(): void;
        unlockScreen(): void;
    }

    namespace W2Overlay {
        interface Options {
            /** if not null, then allows multiple concurrent overlays, default = null */ 
            name?: string,
            /** html text to display, default = '' */ 
            html?: string, 
            /** default = none */       
            align?: 'none' | 'left' | 'right' | 'both',
            /** offset left, default = 0 */
            left?: number,
            /** offset top, default = 0 */
            top?: number,
            /** tip offset left, default = 30 */
            tipLeft?: number,
            /** if true - no tip will be displayed, default = false */
            noTip?: boolean,
            /** if text is selectable inside the overlay, default = false */
            selectable?: boolean,
            /** fixed width, default = 0 */
            width?: number,
            /** fixed height, default = 0 */
            height?: number,
            /** max width if any, default = null */
            maxWidth?: null,
            /** max height if any, default = null */
            maxHeight?: null,
            /** if true, it will be opened at mouse position, default = false */
            contextMenu?: boolean,
            /** pageX from event.pageX object (for contextMenu), default = null */
            pageX?: number,
            /** pageY from event.pageY object (for contextMenu), default = null */
            pageY?: number,
            /** original event (instead of pageX and pageY), default  = null */
            originalEvent?: Event,
            /** additional style for main div, default  = '' */
            style?: string,
            /** additional class name for main div, default = '' */
            class?: string,
            /** css style of entire overlay, default = '' */
            overlayStyle?: string,
            /** event on show, default = null */
            onShow?: Function | (() => void),
            /** event on hide, if handler return false then hide function is aborted, default = null */
            onHide?: (() => boolean),
            /** show above control, default = false */
            openAbove?: boolean,
            tmp?: {}
        }
    }
    interface W2OnClickable {
      onClick?(event: W2Event): void;
      onClick?(id: string, data: W2Event): void;
    }

}
