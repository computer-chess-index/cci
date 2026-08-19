# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-06-29 | 2373<sub>(+136) | 2651<sub>(+110) | 2808<sub>(+204) |  |
| 2.0.0 | 2026-05-23 | 2237<sub>(+346) | 2541<sub>(+376) | 2604<sub>(+374) |  |
| 1.2.0 | 2026-05-07 | 1891<sub>(+167) | 2165<sub>(+162) | 2230<sub>(+142) |  |
| 1.1.0 | 2026-04-21 | 1724<sub>(+80) | 2003<sub>(+126) | 2088<sub>(+141) |  |
| 1.0.0 | 2026-02-20 | 1644<sub>(+102) | 1877<sub>(+76) | 1947<sub>(+88) |  |
| 0.9.0 | 2026-01-21 | 1542 | 1801 | 1859 |  |
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

Generated: 2026-08-19 06:28:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0", "2.0.0", "2.1.0"]
  y-axis "Elo Rating" 1500 --> 2900
  line "STC (8.0+0.08s)" [1542, 1644, 1724, 1891, 2237, 2373]
  line "STC (8.0+0.08s)" [1542, 1644, 1724, 1891, 2237, 2373]
  line "LTC (60.0+0.60s)" [1801, 1877, 2003, 2165, 2541, 2651]
  line "VLTC (2m24s+1.12s)" [1859, 1947, 2088, 2230, 2604, 2808]
  line "VLTC (2m24s+1.12s)" [1859, 1947, 2088, 2230, 2604, 2808]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2808 | 35 | 248 | 49% | 2812 | 40% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2651 | 39 | 214 | 50% | 2653 | 31% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2373 | 34 | 298 | 49% | 2377 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2604 | 48 | 136 | 49% | 2622 | 38% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2541 | 45 | 168 | 54% | 2498 | 30% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2237 | 44 | 182 | 55% | 2183 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2230 | 31 | 364 | 51% | 2223 | 26% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2165 | 34 | 292 | 50% | 2152 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1891 | 32 | 356 | 51% | 1872 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2088 | 32 | 348 | 53% | 2061 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2003 | 33 | 326 | 51% | 1993 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1724 | 32 | 352 | 50% | 1710 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1947 | 29 | 390 | 50% | 1948 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1877 | 31 | 384 | 51% | 1870 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1644 | 30 | 394 | 48% | 1662 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1859 | 41 | 208 | 50% | 1863 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1801 | 36 | 280 | 53% | 1771 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1542 | 39 | 242 | 49% | 1551 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |