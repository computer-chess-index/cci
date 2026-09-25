# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-06-29 | 2383<sub>(+135) | 2669<sub>(+115) | 2815<sub>(+199) |  |
| 2.0.0 | 2026-05-23 | 2248<sub>(+349) | 2554<sub>(+376) | 2616<sub>(+375) |  |
| 1.2.0 | 2026-05-07 | 1899<sub>(+167) | 2178<sub>(+165) | 2241<sub>(+143) |  |
| 1.1.0 | 2026-04-21 | 1732<sub>(+80) | 2013<sub>(+127) | 2098<sub>(+142) |  |
| 1.0.0 | 2026-02-20 | 1652<sub>(+102) | 1886<sub>(+77) | 1956<sub>(+88) |  |
| 0.9.0 | 2026-01-21 | 1550 | 1809 | 1868 |  |
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

Generated: 2026-09-25 04:41:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0", "2.0.0", "2.1.0"]
  y-axis "Elo Rating" 1500 --> 2900
  line "" [1550, 1652, 1732, 1899, 2248, 2383]
  line "STC (8.0+0.08s)" [1550, 1652, 1732, 1899, 2248, 2383]
  line "LTC (60.0+0.60s)" [1809, 1886, 2013, 2178, 2554, 2669]
  line "" [1868, 1956, 2098, 2241, 2616, 2815]
  line "VLTC (2m24s+1.12s)" [1868, 1956, 2098, 2241, 2616, 2815]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2815 | 33 | 282 | 49% | 2826 | 39% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2669 | 35 | 262 | 50% | 2666 | 33% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2383 | 32 | 334 | 49% | 2390 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2616 | 48 | 136 | 49% | 2634 | 38% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2554 | 45 | 168 | 54% | 2511 | 30% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2248 | 44 | 182 | 55% | 2194 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2241 | 31 | 364 | 51% | 2234 | 26% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2178 | 34 | 292 | 50% | 2164 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1899 | 32 | 356 | 51% | 1882 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2098 | 32 | 348 | 53% | 2072 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2013 | 33 | 326 | 51% | 2002 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1732 | 32 | 352 | 50% | 1719 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1956 | 29 | 390 | 50% | 1958 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1886 | 31 | 384 | 51% | 1879 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1652 | 30 | 394 | 48% | 1670 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1868 | 41 | 208 | 50% | 1872 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1809 | 36 | 280 | 53% | 1779 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1550 | 39 | 242 | 49% | 1559 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |