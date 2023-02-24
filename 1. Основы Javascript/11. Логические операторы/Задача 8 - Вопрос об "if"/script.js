if (-1 || 0) alert( 'first' ); // вернет first
if (-1 && 0) alert( 'second' ); // вернет undefined, alert не сработает
if (null || -1 && 1) alert( 'third' ); // вернет third