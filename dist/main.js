(() => {
	'use strict';
	const e = (e, n, t) => (
		(n.style.width = '500px'),
		(n.style.heght = '500px'),
		(n.style.backgroundColor = t),
		(n.innerHTML = e),
		(n.style.border = '1px solid black'),
		n
	);
	let n = document.getElementById('footer'),
		t = document.createElement('div'),
		l = document.createElement('ol'),
		a = document.createElement('li'),
		d = document.createElement('a');
	(d.href = '../index.html'), (d.innerHTML = 'Inicio'), a.appendChild(d);
	let m = document.createElement('li'),
		r = document.createElement('a');
	(r.href = 'negacion.html'), (r.innerHTML = 'Inicio de la tristeza...'), (m.value = '3'), m.appendChild(r);
	let i = document.createElement('li'),
		c = document.createElement('a');
	(c.href = 'añosDeDepre.html'), (c.innerHTML = '¿Entonces que pasó?'), i.appendChild(c);
	let p = document.createElement('li'),
		o = document.createElement('a');
	(o.href = 'loPeor.html'), (o.innerHTML = '¿Y lo peor que fue?'), p.appendChild(o);
	let h = document.createElement('li'),
		u = document.createElement('a');
	(u.href = 'laSorpresa.html'), (u.innerHTML = 'Una sopresita'), h.appendChild(u);
	let E = document.createElement('li'),
		s = document.createElement('a');
	(s.href = 'estres.html'), (s.innerHTML = 'Sin embargo...'), E.appendChild(s);
	let C = document.createElement('li'),
		L = document.createElement('a');
	(L.href = 'queHacer.html'), (L.innerHTML = 'PERO otra vez'), C.appendChild(L);
	let f = document.createElement('li'),
		T = document.createElement('a');
	(T.href = 'elTioGoat.html'), (T.innerHTML = 'Pero mas que mis hermanas...'), f.appendChild(T);
	let M = document.createElement('li'),
		H = document.createElement('a');
	(H.href = 'felicidadPura.html'),
		(H.innerHTML = 'SOY LA PERSONA MAS FELIZ DEL MUNDO'),
		M.appendChild(H),
		l.appendChild(a),
		l.appendChild(m),
		l.appendChild(i),
		l.appendChild(p),
		l.appendChild(h),
		l.appendChild(E),
		l.appendChild(C),
		l.appendChild(f),
		l.appendChild(M),
		(t = e('Links sin 2', t, 'green')),
		t.append(l),
		n.appendChild(t);
	let g = document.getElementById('footer'),
		P = document.createElement('div'),
		S = document.createElement('ol'),
		O = document.createElement('li'),
		D = document.createElement('a');
	(D.href = '../index.html'), (D.innerHTML = 'Inicio'), O.appendChild(D);
	let I = document.createElement('li'),
		q = document.createElement('a');
	(q.href = 'elInicio.html'), (q.innerHTML = '¿De donde vino TANTO amor a los Huskies?'), I.appendChild(q);
	let A = document.createElement('li'),
		v = document.createElement('a');
	(v.href = 'añosDeDepre.html'), (v.innerHTML = '¿Entonces que pasó?'), (A.value = '4'), A.appendChild(v);
	let N = document.createElement('li'),
		y = document.createElement('a');
	(y.href = 'loPeor.html'), (y.innerHTML = '¿Y lo peor que fue?<'), N.appendChild(y);
	let k = document.createElement('li'),
		R = document.createElement('a');
	(R.href = 'laSorpresa.html'), (R.innerHTML = 'Una sopresita'), k.appendChild(R);
	let U = document.createElement('li'),
		Y = document.createElement('a');
	(Y.href = 'estres.html'), (Y.innerHTML = 'Sin embargo...'), U.appendChild(Y);
	let b = document.createElement('li'),
		z = document.createElement('a');
	(z.href = 'queHacer.html'), (z.innerHTML = 'PERO otra vez'), b.appendChild(z);
	let x = document.createElement('li'),
		B = document.createElement('a');
	(B.href = 'elTioGoat.html'), (B.innerHTML = 'Pero mas que mis hermanas...'), x.appendChild(B);
	let F = document.createElement('li'),
		G = document.createElement('a');
	(G.href = 'felicidadPura.html'),
		(G.innerHTML = 'SOY LA PERSONA MAS FELIZ DEL MUNDO'),
		F.appendChild(G),
		S.appendChild(O),
		S.appendChild(I),
		S.appendChild(A),
		S.appendChild(N),
		S.appendChild(k),
		S.appendChild(U),
		S.appendChild(b),
		S.appendChild(x),
		S.appendChild(F),
		(P = e('Links sin 3', P, 'yellow')),
		P.append(S),
		g.appendChild(P);
	let Z = document.getElementById('footer'),
		w = document.createElement('div'),
		j = document.createElement('ol'),
		J = document.createElement('li'),
		K = document.createElement('a');
	(K.href = '../index.html'), (K.innerHTML = 'Inicio'), J.appendChild(K);
	let Q = document.createElement('li'),
		V = document.createElement('a');
	(V.href = 'elInicio.html'), (V.innerHTML = '¿De donde vino TANTO amor a los Huskies?'), Q.appendChild(V);
	let W = document.createElement('li'),
		X = document.createElement('a');
	(X.href = 'negacion.html'), (X.innerHTML = 'Inicio de la tristeza...'), W.appendChild(X);
	let $ = document.createElement('li'),
		_ = document.createElement('a');
	(_.href = 'loPeor.html'), (_.innerHTML = '¿Y lo peor que fue?'), ($.value = '5'), $.appendChild(_);
	let ee = document.createElement('li'),
		ne = document.createElement('a');
	(ne.href = 'laSorpresa.html'), (ne.innerHTML = 'Una sopresita'), ee.appendChild(ne);
	let te = document.createElement('li'),
		le = document.createElement('a');
	(le.href = 'estres.html'), (le.innerHTML = 'Sin embargo...'), te.appendChild(le);
	let ae = document.createElement('li'),
		de = document.createElement('a');
	(de.href = 'queHacer.html'), (de.innerHTML = 'PERO otra vez'), ae.appendChild(de);
	let me = document.createElement('li'),
		re = document.createElement('a');
	(re.href = 'elTioGoat.html'), (re.innerHTML = 'Pero mas que mis hermanas...'), me.appendChild(re);
	let ie = document.createElement('li'),
		ce = document.createElement('a');
	(ce.href = 'felicidadPura.html'),
		(ce.innerHTML = 'SOY LA PERSONA MAS FELIZ DEL MUNDO'),
		ie.appendChild(ce),
		j.appendChild(J),
		j.appendChild(Q),
		j.appendChild(W),
		j.appendChild($),
		j.appendChild(ee),
		j.appendChild(te),
		j.appendChild(ae),
		j.appendChild(me),
		j.appendChild(ie),
		(w = e('Links sin 4', w, 'green')),
		w.append(j),
		Z.appendChild(w);
	let pe = document.getElementById('footer'),
		oe = document.createElement('ol');
	oe.start = '2';
	let he = document.createElement('li'),
		ue = document.createElement('a');
	(ue.href = './pages/elInicio.html'),
		(ue.innerHTML = '¿De donde vino TANTO amor a los Huskies?'),
		he.appendChild(ue);
	let Ee = document.createElement('li'),
		se = document.createElement('a');
	(se.href = './pages/negacion.html'), (se.innerHTML = 'Inicio de la tristeza...'), Ee.appendChild(se);
	let Ce = document.createElement('li'),
		Le = document.createElement('a');
	(Le.href = './pages/añosDeDepre.html'), (Le.innerHTML = '¿Entonces que pasó?'), Ce.appendChild(Le);
	let fe = document.createElement('li'),
		Te = document.createElement('a');
	(Te.href = './pages/loPeor.html'), (Te.innerHTML = '¿Y lo peor que fue?<'), fe.appendChild(Te);
	let Me = document.createElement('li'),
		He = document.createElement('a');
	(He.href = './pages/laSorpresa.html'), (He.innerHTML = 'Una sopresita'), Me.appendChild(He);
	let ge = document.createElement('li'),
		Pe = document.createElement('a');
	(Pe.href = './pages/estres.html'), (Pe.innerHTML = 'Sin embargo...'), ge.appendChild(Pe);
	let Se = document.createElement('li'),
		Oe = document.createElement('a');
	(Oe.href = './pages/queHacer.html'), (Oe.innerHTML = 'PERO otra vez'), Se.appendChild(Oe);
	let De = document.createElement('li'),
		Ie = document.createElement('a');
	(Ie.href = './pages/elTioGoat.html'), (Ie.innerHTML = 'Pero mas que mis hermanas...'), De.appendChild(Ie);
	let qe = document.createElement('li'),
		Ae = document.createElement('a');
	(Ae.href = './pages/felicidadPura.html'),
		(Ae.innerHTML = 'SOY LA PERSONA MAS FELIZ DEL MUNDO'),
		qe.appendChild(Ae),
		oe.appendChild(he),
		oe.appendChild(Ee),
		oe.appendChild(Ce),
		oe.appendChild(fe),
		oe.appendChild(Me),
		oe.appendChild(ge),
		oe.appendChild(Se),
		oe.appendChild(De),
		oe.appendChild(qe),
		pe.appendChild(oe);
})();
