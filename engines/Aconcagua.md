# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1.0 | 2026-03-01 | 2249<sub>(+43) | 2498<sub>(-1) | 2615<sub>(+112) |  |
| 5.0.0 | 2026-01-25 | 2206<sub>(+207) | 2499<sub>(+190) | 2503<sub>(+86) |  |
| 4.1.0 | 2025-12-14 | 1999<sub>(+55) | 2309<sub>(+80) | 2417<sub>(+59) |  |
| 4.0.0 | 2025-11-09 | 1944<sub>(+new) | 2229<sub>(+new) | 2358<sub>(+new) |  |
| 3.4.0 | 2025-10-04 |  |  |  |  |
| 3.3.0 | 2025-09-14 |  |  |  |  |
| 3.2.0 | 2025-08-31 |  |  |  |  |
| 3.1.0 | 2025-08-16 |  |  |  |  |
| 3.0.0 | 2025-07-20 |  |  |  |  |
| 2.1.0 | 2025-06-28 |  |  |  |  |
| 2.0.0 | 2025-05-31 |  |  |  |  |
| 1.1.0 | 2025-05-17 |  |  |  |  |
| 1.0.0 | 2025-05-17 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Aconcagua+<version>&body=###%20Engine%20name%0AAconcagua%0A%0A###%20Version%0A5.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-06 06:22:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0"]
  y-axis "Elo Rating" 1900 --> 2700
  line "STC (8.0+0.08s)" [1944, 1999, 2206, 2249]
  line "STC (8.0+0.08s)" [1944, 1999, 2206, 2249]
  line "LTC (60.0+0.60s)" [2229, 2309, 2499, 2498]
  line "VLTC (2m24s+1.12s)" [2358, 2417, 2503, 2615]
  line "VLTC (2m24s+1.12s)" [2358, 2417, 2503, 2615]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2615 | 28 | 400 | 49% | 2622 | 39% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2498 | 30 | 364 | 51% | 2489 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2249 | 28 | 420 | 50% | 2249 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2503 | 42 | 196 | 51% | 2495 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2499 | 37 | 246 | 49% | 2504 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2206 | 34 | 290 | 50% | 2209 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2417 | 40 | 214 | 50% | 2422 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2309 | 40 | 222 | 51% | 2292 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 1999 | 33 | 312 | 47% | 2025 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2358 | 46 | 172 | 41% | 2466 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2229 | 55 | 116 | 47% | 2257 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1944 | 62 | 92 | 47% | 1971 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |