# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-06-29 | 2383<sub>(+141) | 2655<sub>(+109) | 2816<sub>(+206) |  |
| 2.0.0 | 2026-05-23 | 2242<sub>(+347) | 2546<sub>(+375) | 2610<sub>(+376) |  |
| 1.2.0 | 2026-05-07 | 1895<sub>(+168) | 2171<sub>(+164) | 2234<sub>(+141) |  |
| 1.1.0 | 2026-04-21 | 1727<sub>(+80) | 2007<sub>(+126) | 2093<sub>(+141) |  |
| 1.0.0 | 2026-02-20 | 1647<sub>(+101) | 1881<sub>(+76) | 1952<sub>(+89) |  |
| 0.9.0 | 2026-01-21 | 1546 | 1805 | 1863 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ratsu+<version>&body=###%20Engine%20name%0ARatsu%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-26 06:28:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0", "2.0.0", "2.1.0"]
  y-axis "Elo Rating" 1500 --> 2900
  line "STC (8.0+0.08s)" [1546, 1647, 1727, 1895, 2242, 2383]
  line "STC (8.0+0.08s)" [1546, 1647, 1727, 1895, 2242, 2383]
  line "LTC (60.0+0.60s)" [1805, 1881, 2007, 2171, 2546, 2655]
  line "VLTC (2m24s+1.12s)" [1863, 1952, 2093, 2234, 2610, 2816]
  line "VLTC (2m24s+1.12s)" [1863, 1952, 2093, 2234, 2610, 2816]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2816 | 35 | 256 | 50% | 2816 | 40% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2655 | 38 | 222 | 50% | 2655 | 31% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2383 | 33 | 310 | 50% | 2384 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2610 | 48 | 136 | 49% | 2626 | 38% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2546 | 45 | 168 | 54% | 2503 | 30% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2242 | 44 | 182 | 55% | 2188 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2234 | 31 | 364 | 51% | 2229 | 26% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2171 | 34 | 292 | 50% | 2157 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1895 | 32 | 356 | 51% | 1877 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2093 | 32 | 348 | 53% | 2067 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2007 | 33 | 326 | 51% | 1997 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1727 | 32 | 352 | 50% | 1715 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1952 | 29 | 390 | 50% | 1952 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1881 | 31 | 384 | 51% | 1874 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1647 | 30 | 394 | 48% | 1666 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1863 | 41 | 208 | 50% | 1867 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1805 | 36 | 280 | 53% | 1775 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1546 | 39 | 242 | 49% | 1554 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |