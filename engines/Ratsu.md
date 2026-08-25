# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-06-29 | 2380<sub>(+139) | 2654<sub>(+109) | 2812<sub>(+204) |  |
| 2.0.0 | 2026-05-23 | 2241<sub>(+347) | 2545<sub>(+376) | 2608<sub>(+375) |  |
| 1.2.0 | 2026-05-07 | 1894<sub>(+167) | 2169<sub>(+163) | 2233<sub>(+142) |  |
| 1.1.0 | 2026-04-21 | 1727<sub>(+80) | 2006<sub>(+125) | 2091<sub>(+140) |  |
| 1.0.0 | 2026-02-20 | 1647<sub>(+103) | 1881<sub>(+77) | 1951<sub>(+89) |  |
| 0.9.0 | 2026-01-21 | 1544 | 1804 | 1862 |  |
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

Generated: 2026-08-25 06:28:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0", "2.0.0", "2.1.0"]
  y-axis "Elo Rating" 1500 --> 2900
  line "STC (8.0+0.08s)" [1544, 1647, 1727, 1894, 2241, 2380]
  line "STC (8.0+0.08s)" [1544, 1647, 1727, 1894, 2241, 2380]
  line "LTC (60.0+0.60s)" [1804, 1881, 2006, 2169, 2545, 2654]
  line "VLTC (2m24s+1.12s)" [1862, 1951, 2091, 2233, 2608, 2812]
  line "VLTC (2m24s+1.12s)" [1862, 1951, 2091, 2233, 2608, 2812]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2812 | 35 | 252 | 49% | 2815 | 40% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2654 | 38 | 222 | 50% | 2654 | 31% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2380 | 33 | 306 | 50% | 2381 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2608 | 48 | 136 | 49% | 2626 | 38% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2545 | 45 | 168 | 54% | 2502 | 30% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2241 | 44 | 182 | 55% | 2187 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2233 | 31 | 364 | 51% | 2228 | 26% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2169 | 34 | 292 | 50% | 2157 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1894 | 32 | 356 | 51% | 1875 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2091 | 32 | 348 | 53% | 2066 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2006 | 33 | 326 | 51% | 1997 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1727 | 32 | 352 | 50% | 1713 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1951 | 29 | 390 | 50% | 1951 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1881 | 31 | 384 | 51% | 1874 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1647 | 30 | 394 | 48% | 1665 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1862 | 41 | 208 | 50% | 1867 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1804 | 36 | 280 | 53% | 1774 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1544 | 39 | 242 | 49% | 1554 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |