# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-07 | 3279<sub>(+94) | 3465<sub>(+60) | 3515<sub>(+55) |  |
| 6.1 | 2026-02-01 | 3185<sub>(+33) | 3405<sub>(+62) | 3460<sub>(+55) |  |
| 6.0 | 2026-01-01 | 3152<sub>(+120) | 3343<sub>(+121) | 3405<sub>(+153) |  |
| 5.0 | 2025-10-19 | 3032<sub>(+new) | 3222<sub>(+new) | 3252<sub>(+new) |  |
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

Generated: 2026-06-08 06:27:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3032, 3152, 3185, 3279]
  line "STC (8.0+0.08s)" [3032, 3152, 3185, 3279]
  line "LTC (60.0+0.60s)" [3222, 3343, 3405, 3465]
  line "VLTC (2m24s+1.12s)" [3252, 3405, 3460, 3515]
  line "VLTC (2m24s+1.12s)" [3252, 3405, 3460, 3515]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 27 | 326 | 50% | 3511 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3465 | 25 | 368 | 51% | 3459 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3279 | 28 | 328 | 50% | 3281 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3460 | 21 | 520 | 50% | 3459 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3405 | 23 | 464 | 50% | 3403 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3185 | 25 | 456 | 51% | 3177 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3405 | 28 | 312 | 50% | 3399 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3343 | 31 | 268 | 50% | 3343 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3152 | 32 | 264 | 49% | 3160 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3252 | 32 | 254 | 50% | 3241 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3222 | 38 | 184 | 53% | 3177 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3032 | 35 | 236 | 55% | 2950 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |