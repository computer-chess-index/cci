# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-07 | 3278<sub>(+89) | 3468<sub>(+59) | 3518<sub>(+55) |  |
| 6.1 | 2026-02-01 | 3189<sub>(+33) | 3409<sub>(+62) | 3463<sub>(+56) |  |
| 6.0 | 2026-01-01 | 3156<sub>(+121) | 3347<sub>(+122) | 3407<sub>(+152) |  |
| 5.0 | 2025-10-19 | 3035<sub>(+new) | 3225<sub>(+new) | 3255<sub>(+new) |  |
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

Generated: 2026-05-21 06:27:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3035, 3156, 3189, 3278]
  line "STC (8.0+0.08s)" [3035, 3156, 3189, 3278]
  line "LTC (60.0+0.60s)" [3225, 3347, 3409, 3468]
  line "VLTC (2m24s+1.12s)" [3255, 3407, 3463, 3518]
  line "VLTC (2m24s+1.12s)" [3255, 3407, 3463, 3518]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3518 | 27 | 326 | 50% | 3515 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3468 | 25 | 368 | 51% | 3461 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3278 | 28 | 320 | 49% | 3283 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3463 | 21 | 520 | 50% | 3461 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3409 | 23 | 464 | 50% | 3407 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3189 | 25 | 456 | 51% | 3181 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3407 | 28 | 312 | 50% | 3403 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3347 | 31 | 268 | 50% | 3347 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3156 | 32 | 264 | 49% | 3163 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3255 | 32 | 254 | 50% | 3245 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3225 | 38 | 184 | 53% | 3181 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3035 | 35 | 236 | 55% | 2952 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |