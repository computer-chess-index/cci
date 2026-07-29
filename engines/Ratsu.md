# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-06-29 | 2368<sub>(+136) | 2645<sub>(+106) | 2812<sub>(+211) |  |
| 2.0.0 | 2026-05-23 | 2232<sub>(+346) | 2539<sub>(+378) | 2601<sub>(+376) |  |
| 1.2.0 | 2026-05-07 | 1886<sub>(+167) | 2161<sub>(+163) | 2225<sub>(+142) |  |
| 1.1.0 | 2026-04-21 | 1719<sub>(+81) | 1998<sub>(+126) | 2083<sub>(+140) |  |
| 1.0.0 | 2026-02-20 | 1638<sub>(+102) | 1872<sub>(+76) | 1943<sub>(+89) |  |
| 0.9.0 | 2026-01-21 | 1536 | 1796 | 1854 |  |
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

Generated: 2026-07-29 06:28:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0", "2.0.0", "2.1.0"]
  y-axis "Elo Rating" 1500 --> 2900
  line "STC (8.0+0.08s)" [1536, 1638, 1719, 1886, 2232, 2368]
  line "STC (8.0+0.08s)" [1536, 1638, 1719, 1886, 2232, 2368]
  line "LTC (60.0+0.60s)" [1796, 1872, 1998, 2161, 2539, 2645]
  line "VLTC (2m24s+1.12s)" [1854, 1943, 2083, 2225, 2601, 2812]
  line "VLTC (2m24s+1.12s)" [1854, 1943, 2083, 2225, 2601, 2812]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2812 | 38 | 208 | 50% | 2805 | 39% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2645 | 41 | 190 | 49% | 2651 | 32% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2368 | 37 | 246 | 49% | 2380 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2601 | 48 | 136 | 49% | 2618 | 38% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2539 | 45 | 168 | 54% | 2495 | 30% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2232 | 44 | 182 | 55% | 2178 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2225 | 31 | 364 | 51% | 2219 | 26% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2161 | 34 | 292 | 50% | 2148 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1886 | 32 | 356 | 51% | 1867 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2083 | 32 | 348 | 53% | 2057 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1998 | 33 | 326 | 51% | 1989 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1719 | 32 | 352 | 50% | 1705 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1943 | 29 | 390 | 50% | 1944 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1872 | 31 | 384 | 51% | 1866 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1638 | 30 | 394 | 48% | 1656 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1854 | 41 | 208 | 50% | 1859 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1796 | 36 | 280 | 53% | 1766 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1536 | 39 | 242 | 49% | 1544 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |