# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2365<sub>(+233) | 2607<sub>(+231) | 2739<sub>(+259) |  |
| 1.5 | 2026-05-26 | 2132<sub>(+141) | 2376<sub>(+97) | 2480<sub>(+140) |  |
| 1.4 | 2026-04-25 | 1991<sub>(+487) | 2279<sub>(+434) | 2340<sub>(+380) |  |
| 1.3 | 2026-04-11 | 1504<sub>(+new) | 1845<sub>(+new) | 1960<sub>(+new) |  |
| 1.2 | 2026-03-24 |  |  |  |  |
| 1.1 | 2026-03-11 |  |  |  |  |
| 1.0 | 2026-03-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Facon+<version>&body=###%20Engine%20name%0AFacon%0A%0A###%20Version%0A1.6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-23 06:24:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1504, 1991, 2132, 2365]
  line "STC (8.0+0.08s)" [1504, 1991, 2132, 2365]
  line "LTC (60.0+0.60s)" [1845, 2279, 2376, 2607]
  line "VLTC (2m24s+1.12s)" [1960, 2340, 2480, 2739]
  line "VLTC (2m24s+1.12s)" [1960, 2340, 2480, 2739]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2739 | 32 | 314 | 46% | 2768 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2607 | 34 | 280 | 51% | 2592 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2365 | 36 | 256 | 53% | 2337 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2480 | 35 | 274 | 49% | 2492 | 25% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2376 | 42 | 186 | 49% | 2385 | 34% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2132 | 41 | 214 | 50% | 2129 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2340 | 29 | 420 | 51% | 2327 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2279 | 31 | 380 | 53% | 2246 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 1991 | 30 | 406 | 51% | 1972 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1960 | 34 | 324 | 48% | 1976 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1845 | 32 | 364 | 50% | 1841 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1504 | 31 | 378 | 50% | 1497 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |