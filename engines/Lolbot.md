# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2107<sub>(+73) | 2407<sub>(+159) | 2439<sub>(+114) |  |
| 0.2.3 | 2025-12-08 | 2034<sub>(+29) | 2248<sub>(-24) | 2325<sub>(+15) |  |
| 0.2.2 | 2025-11-29 | 2005<sub>(+65) | 2272<sub>(+78) | 2310<sub>(-19) |  |
| 0.2.1 | 2025-11-16 | 1940<sub>(-70) | 2194<sub>(-28) | 2329<sub>(-51) |  |
| 0.2 | 2025-11-15 | 2010<sub>(+new) | 2222<sub>(+new) | 2380<sub>(+new) |  |
| 0.1-alpha | 2025-03-29 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lolbot+<version>&body=###%20Engine%20name%0ALolbot%0A%0A###%20Version%0A0.3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:26:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [2010, 1940, 2005, 2034, 2107]
  line "STC (8.0+0.08s)" [2010, 1940, 2005, 2034, 2107]
  line "LTC (60.0+0.60s)" [2222, 2194, 2272, 2248, 2407]
  line "VLTC (2m24s+1.12s)" [2380, 2329, 2310, 2325, 2439]
  line "VLTC (2m24s+1.12s)" [2380, 2329, 2310, 2325, 2439]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2439 | 30 | 394 | 51% | 2419 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2407 | 30 | 388 | 53% | 2376 | 23% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2107 | 31 | 362 | 51% | 2093 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2325 | 31 | 362 | 48% | 2344 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2248 | 31 | 376 | 51% | 2233 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2034 | 28 | 468 | 49% | 2041 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2310 | 53 | 128 | 53% | 2280 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2272 | 66 | 76 | 51% | 2271 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 2005 | 59 | 104 | 49% | 2018 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2329 | 55 | 132 | 44% | 2404 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2194 | 64 | 88 | 46% | 2233 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1940 | 70 | 76 | 50% | 1940 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2380 | 56 | 116 | 52% | 2361 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2222 | 47 | 160 | 49% | 2234 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 2010 | 59 | 100 | 54% | 1970 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |