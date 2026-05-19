# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-07 | 3297<sub>(+93) | 3483<sub>(+59) | 3534<sub>(+55) |  |
| 6.1 | 2026-02-01 | 3204<sub>(+33) | 3424<sub>(+62) | 3479<sub>(+55) |  |
| 6.0 | 2026-01-01 | 3171<sub>(+120) | 3362<sub>(+121) | 3424<sub>(+153) |  |
| 5.0 | 2025-10-19 | 3051<sub>(+new) | 3241<sub>(+new) | 3271<sub>(+new) |  |
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

Generated: 2026-05-19 06:28:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3051, 3171, 3204, 3297]
  line "STC (8.0+0.08s)" [3051, 3171, 3204, 3297]
  line "LTC (60.0+0.60s)" [3241, 3362, 3424, 3483]
  line "VLTC (2m24s+1.12s)" [3271, 3424, 3479, 3534]
  line "VLTC (2m24s+1.12s)" [3271, 3424, 3479, 3534]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 28 | 290 | 50% | 3534 | 87% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3483 | 27 | 324 | 51% | 3475 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3297 | 30 | 288 | 49% | 3301 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3479 | 21 | 520 | 50% | 3478 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3424 | 23 | 464 | 50% | 3422 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3204 | 25 | 456 | 51% | 3195 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3424 | 28 | 312 | 50% | 3420 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3362 | 31 | 268 | 50% | 3362 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3171 | 32 | 264 | 49% | 3179 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3271 | 32 | 254 | 50% | 3260 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3241 | 38 | 184 | 53% | 3195 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3051 | 35 | 236 | 55% | 2969 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |