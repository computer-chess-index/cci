# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-07 | 3278<sub>(+95) | 3464<sub>(+61) | 3514<sub>(+55) |  |
| 6.1 | 2026-02-01 | 3183<sub>(+31) | 3403<sub>(+60) | 3459<sub>(+56) |  |
| 6.0 | 2026-01-01 | 3152<sub>(+121) | 3343<sub>(+122) | 3403<sub>(+152) |  |
| 5.0 | 2025-10-19 | 3031<sub>(+new) | 3221<sub>(+new) | 3251<sub>(+new) |  |
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

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PZChessBot+<version>&body=###%20Engine%20name%0APZChessBot%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-10 06:27:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3031, 3152, 3183, 3278]
  line "STC (8.0+0.08s)" [3031, 3152, 3183, 3278]
  line "LTC (60.0+0.60s)" [3221, 3343, 3403, 3464]
  line "VLTC (2m24s+1.12s)" [3251, 3403, 3459, 3514]
  line "VLTC (2m24s+1.12s)" [3251, 3403, 3459, 3514]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3514 | 27 | 330 | 50% | 3511 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3464 | 25 | 372 | 51% | 3457 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3278 | 28 | 328 | 50% | 3281 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3459 | 21 | 520 | 50% | 3457 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3403 | 23 | 464 | 50% | 3403 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3183 | 25 | 456 | 51% | 3177 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3403 | 28 | 312 | 50% | 3399 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3343 | 31 | 268 | 50% | 3343 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3152 | 32 | 264 | 49% | 3159 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3251 | 32 | 254 | 50% | 3241 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3221 | 38 | 184 | 53% | 3177 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3031 | 35 | 236 | 55% | 2948 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |