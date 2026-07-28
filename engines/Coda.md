# Engine: Coda

Author: Adam Twiss

Home: https://github.com/adamtwiss/coda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.3 | 2026-07-26 | 3418<sub>(-3) | 3551<sub>(-8) | 3587<sub>(+31) |  |
| 0.9.2 | 2026-07-16 | 3421<sub>(+232) | 3559<sub>(+165) | 3556<sub>(+96) |  |
| 0.9.1 | 2026-07-14 | 3189 | 3394 | 3460 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Coda+<version>&body=###%20Engine%20name%0ACoda%0A%0A###%20Version%0A0.9.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-28 06:24:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.1", "0.9.2", "0.9.3"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3189, 3421, 3418]
  line "STC (8.0+0.08s)" [3189, 3421, 3418]
  line "LTC (60.0+0.60s)" [3394, 3559, 3551]
  line "VLTC (2m24s+1.12s)" [3460, 3556, 3587]
  line "VLTC (2m24s+1.12s)" [3460, 3556, 3587]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3587 | 56 | 72 | 53% | 3567 | 86% |
| 0.9.3 | LTC <sub>(60.0+0.60s)</sub> | 3551 | 38 | 160 | 52% | 3540 | 88% |
| 0.9.3 | STC <sub>(8.0+0.08s)</sub> | 3418 | 37 | 176 | 51% | 3414 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 32 | 214 | 51% | 3549 | 91% |
| 0.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3559 | 36 | 178 | 50% | 3556 | 89% |
| 0.9.2 | STC <sub>(8.0+0.08s)</sub> | 3421 | 27 | 328 | 48% | 3434 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3460 | 39 | 166 | 55% | 3411 | 73% |
| 0.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3394 | 42 | 152 | 55% | 3333 | 63% |
| 0.9.1 | STC <sub>(8.0+0.08s)</sub> | 3189 | 41 | 172 | 52% | 3155 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |