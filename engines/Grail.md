# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2938<sub>(+34) | 3202<sub>(+39) | 3278<sub>(+22) |  |
| 2.0.0 | 2026-05-11 | 2904<sub>(+103) | 3163<sub>(+86) | 3256<sub>(+82) |  |
| 1.1.0 | 2026-02-28 | 2801<sub>(+353) | 3077<sub>(+362) | 3174<sub>(+321) |  |
| 1.0.4 | 2026-01-16 | 2448<sub>(+127) | 2715<sub>(+38) | 2853<sub>(+103) |  |
| 1.0.3 | 2026-01-04 | 2321<sub>(+26) | 2677<sub>(+115) | 2750<sub>(+73) |  |
| 1.0.2 | 2025-12-16 | 2295<sub>(+27) | 2562<sub>(+20) | 2677<sub>(-53) |  |
| 1.0.1 | 2025-12-10 | 2268<sub>(+36) | 2542<sub>(-14) | 2730<sub>(-54) |  |
| 1.0.0 | 2025-12-05 | 2232 | 2556 | 2784 |  |
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

Generated: 2026-08-22 06:25:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2232, 2268, 2295, 2321, 2448, 2801, 2904, 2938]
  line "STC (8.0+0.08s)" [2232, 2268, 2295, 2321, 2448, 2801, 2904, 2938]
  line "LTC (60.0+0.60s)" [2556, 2542, 2562, 2677, 2715, 3077, 3163, 3202]
  line "VLTC (2m24s+1.12s)" [2784, 2730, 2677, 2750, 2853, 3174, 3256, 3278]
  line "VLTC (2m24s+1.12s)" [2784, 2730, 2677, 2750, 2853, 3174, 3256, 3278]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3278 | 27 | 384 | 52% | 3263 | 58% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3202 | 26 | 392 | 51% | 3198 | 59% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2938 | 26 | 430 | 52% | 2919 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3256 | 29 | 316 | 51% | 3249 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3163 | 29 | 322 | 48% | 3177 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2904 | 29 | 352 | 52% | 2884 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3174 | 27 | 392 | 53% | 3155 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3077 | 28 | 356 | 51% | 3063 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2801 | 28 | 398 | 51% | 2792 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2853 | 34 | 272 | 49% | 2861 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2715 | 35 | 252 | 50% | 2718 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2448 | 31 | 348 | 55% | 2403 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2750 | 43 | 172 | 50% | 2754 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2677 | 45 | 160 | 51% | 2670 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2321 | 44 | 172 | 51% | 2314 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2677 | 38 | 214 | 50% | 2677 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2562 | 35 | 264 | 46% | 2600 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2295 | 41 | 212 | 55% | 2250 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2730 | 42 | 180 | 52% | 2715 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2542 | 40 | 202 | 53% | 2515 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2268 | 50 | 142 | 48% | 2286 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2784 | 61 | 92 | 42% | 2854 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2556 | 59 | 92 | 46% | 2589 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2232 | 67 | 82 | 59% | 2148 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |