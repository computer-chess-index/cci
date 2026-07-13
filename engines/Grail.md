# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2928<sub>(+28) | 3190<sub>(+34) | 3263<sub>(+14) |  |
| 2.0.0 | 2026-05-11 | 2900<sub>(+101) | 3156<sub>(+85) | 3249<sub>(+81) |  |
| 1.1.0 | 2026-02-28 | 2799<sub>(+354) | 3071<sub>(+360) | 3168<sub>(+319) |  |
| 1.0.4 | 2026-01-16 | 2445<sub>(+128) | 2711<sub>(+38) | 2849<sub>(+102) |  |
| 1.0.3 | 2026-01-04 | 2317<sub>(+26) | 2673<sub>(+115) | 2747<sub>(+74) |  |
| 1.0.2 | 2025-12-16 | 2291<sub>(+28) | 2558<sub>(+19) | 2673<sub>(-53) |  |
| 1.0.1 | 2025-12-10 | 2263<sub>(+37) | 2539<sub>(-13) | 2726<sub>(-52) |  |
| 1.0.0 | 2025-12-05 | 2226 | 2552 | 2778 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Grail+<version>&body=###%20Engine%20name%0AGrail%0A%0A###%20Version%0A2.0.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-13 06:28:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2226, 2263, 2291, 2317, 2445, 2799, 2900, 2928]
  line "STC (8.0+0.08s)" [2226, 2263, 2291, 2317, 2445, 2799, 2900, 2928]
  line "LTC (60.0+0.60s)" [2552, 2539, 2558, 2673, 2711, 3071, 3156, 3190]
  line "VLTC (2m24s+1.12s)" [2778, 2726, 2673, 2747, 2849, 3168, 3249, 3263]
  line "VLTC (2m24s+1.12s)" [2778, 2726, 2673, 2747, 2849, 3168, 3249, 3263]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2226, 2263, 2291, 2317, 2445, 2799, 2900, 2928]
  line "STC (8.0+0.08s)" [2226, 2263, 2291, 2317, 2445, 2799, 2900, 2928]
  line "LTC (60.0+0.60s)" [2552, 2539, 2558, 2673, 2711, 3071, 3156, 3190]
  line "VLTC (2m24s+1.12s)" [2778, 2726, 2673, 2747, 2849, 3168, 3249, 3263]
  line "VLTC (2m24s+1.12s)" [2778, 2726, 2673, 2747, 2849, 3168, 3249, 3263]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3263 | 29 | 312 | 51% | 3252 | 59% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3190 | 29 | 324 | 50% | 3193 | 59% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2928 | 32 | 300 | 53% | 2905 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3249 | 29 | 316 | 51% | 3243 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3156 | 29 | 322 | 48% | 3170 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2900 | 29 | 352 | 52% | 2880 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3168 | 27 | 392 | 53% | 3148 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3071 | 28 | 356 | 51% | 3058 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2799 | 28 | 398 | 51% | 2788 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2849 | 34 | 272 | 49% | 2857 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2711 | 35 | 252 | 50% | 2714 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2445 | 31 | 348 | 55% | 2400 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2747 | 43 | 172 | 50% | 2750 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2673 | 45 | 160 | 51% | 2668 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2317 | 44 | 172 | 51% | 2310 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2673 | 38 | 214 | 50% | 2673 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2558 | 35 | 264 | 46% | 2596 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2291 | 41 | 212 | 55% | 2246 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2726 | 42 | 180 | 52% | 2711 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2539 | 40 | 202 | 53% | 2512 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2263 | 50 | 142 | 48% | 2282 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2778 | 61 | 92 | 42% | 2849 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2552 | 59 | 92 | 46% | 2587 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2226 | 67 | 82 | 59% | 2142 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |