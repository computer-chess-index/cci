# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2167<sub>(+101) | 2441<sub>(+154) | 2492<sub>(+125) |  |
| 0.2.3 | 2025-12-08 | 2066<sub>(+34) | 2287<sub>(-24) | 2367<sub>(+18) |  |
| 0.2.2 | 2025-11-29 | 2032<sub>(+68) | 2311<sub>(+81) | 2349<sub>(-20) |  |
| 0.2.1 | 2025-11-16 | 1964<sub>(-70) | 2230<sub>(-29) | 2369<sub>(-53) |  |
| 0.2 | 2025-11-15 | 2034<sub>(+new) | 2259<sub>(+new) | 2422<sub>(+new) |  |
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

Generated: 2026-05-14 06:25:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [2034, 1964, 2032, 2066, 2167]
  line "STC (8.0+0.08s)" [2034, 1964, 2032, 2066, 2167]
  line "LTC (60.0+0.60s)" [2259, 2230, 2311, 2287, 2441]
  line "VLTC (2m24s+1.12s)" [2422, 2369, 2349, 2367, 2492]
  line "VLTC (2m24s+1.12s)" [2422, 2369, 2349, 2367, 2492]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2492 | 30 | 380 | 52% | 2465 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2441 | 31 | 356 | 52% | 2425 | 24% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2167 | 32 | 334 | 53% | 2140 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2367 | 31 | 362 | 48% | 2385 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2287 | 31 | 376 | 51% | 2272 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2066 | 28 | 468 | 49% | 2072 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2349 | 53 | 128 | 53% | 2319 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2311 | 66 | 76 | 51% | 2310 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 2032 | 59 | 104 | 49% | 2045 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2369 | 55 | 132 | 44% | 2445 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2230 | 64 | 88 | 46% | 2271 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1964 | 70 | 76 | 50% | 1964 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2422 | 56 | 116 | 52% | 2402 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2259 | 47 | 160 | 49% | 2271 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 2034 | 59 | 100 | 54% | 1994 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |