# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2026-02-01 | 3245<sub>(+32) | 3465<sub>(+62) | 3521<sub>(+56) |  |
| 6.0 | 2026-01-01 | 3213<sub>(+120) | 3403<sub>(+120) | 3465<sub>(+152) |  |
| 5.0 | 2025-10-19 | 3093<sub>(+new) | 3283<sub>(+new) | 3313<sub>(+new) |  |
| 4.0 | 2025-10-03 |  |  |  |  |
| 3.0 | 2025-07-02 |  |  |  |  |
| 2.0 | 2025-06-17 |  |  |  |  |
| 1.0 | 2025-04-20 |  |  |  |  |
| 20250318T22 | 2025-03-19 |  |  |  |  |
| 20250311T07 | 2025-03-11 |  |  |  |  |
| 20250307T21 | 2025-03-08 |  |  |  |  |
| 20250306T21 | 2025-03-07 |  |  |  |  |
| 20250302T22 | 2025-03-04 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PZChessBot+<version>&body=###%20Engine%20name%0APZChessBot%0A%0A###%20Version%0A6.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-03 07:42:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3093, 3213, 3245]
  line "STC (8.0+0.08s)" [3093, 3213, 3245]
  line "LTC (60.0+0.60s)" [3283, 3403, 3465]
  line "VLTC (2m24s+1.12s)" [3313, 3465, 3521]
  line "VLTC (2m24s+1.12s)" [3313, 3465, 3521]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3521 | 21 | 520 | 50% | 3519 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3465 | 23 | 464 | 50% | 3465 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3245 | 25 | 456 | 51% | 3237 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3465 | 28 | 312 | 50% | 3461 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3403 | 31 | 268 | 50% | 3403 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3213 | 32 | 264 | 49% | 3221 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3313 | 32 | 254 | 50% | 3302 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3283 | 38 | 184 | 53% | 3237 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3093 | 35 | 236 | 55% | 3009 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 |  |  |  |  |  |  |  |
| 3.0 |  |  |  |  |  |  |  |
| 2.0 |  |  |  |  |  |  |  |
| 1.0 |  |  |  |  |  |  |  |
| 20250318T22 |  |  |  |  |  |  |  |
| 20250311T07 |  |  |  |  |  |  |  |
| 20250307T21 |  |  |  |  |  |  |  |
| 20250306T21 |  |  |  |  |  |  |  |
| 20250302T22 |  |  |  |  |  |  |  |