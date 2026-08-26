# Engine: Coda

Author: Adam Twiss

Home: https://github.com/adamtwiss/coda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.4 | 2026-08-22 | 3480<sub>(+52) | 3551<sub>(-8) | 3592<sub>(+1) |  |
| 0.9.3 | 2026-07-26 | 3428<sub>(-4) | 3559<sub>(-10) | 3591<sub>(+24) |  |
| 0.9.2 | 2026-07-16 | 3432<sub>(+234) | 3569<sub>(+166) | 3567<sub>(+96) |  |
| 0.9.1 | 2026-07-14 | 3198 | 3403 | 3471 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Coda+<version>&body=###%20Engine%20name%0ACoda%0A%0A###%20Version%0A0.9.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-26 06:24:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.1", "0.9.2", "0.9.3", "0.9.4"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3198, 3432, 3428, 3480]
  line "STC (8.0+0.08s)" [3198, 3432, 3428, 3480]
  line "LTC (60.0+0.60s)" [3403, 3569, 3559, 3551]
  line "VLTC (2m24s+1.12s)" [3471, 3567, 3591, 3592]
  line "VLTC (2m24s+1.12s)" [3471, 3567, 3591, 3592]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3592 | 50 | 92 | 52% | 3576 | 87% |
| 0.9.4 | LTC <sub>(60.0+0.60s)</sub> | 3551 | 36 | 182 | 49% | 3556 | 85% |
| 0.9.4 | STC <sub>(8.0+0.08s)</sub> | 3480 | 30 | 256 | 51% | 3472 | 84% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3591 | 43 | 124 | 53% | 3572 | 90% |
| 0.9.3 | LTC <sub>(60.0+0.60s)</sub> | 3559 | 32 | 228 | 51% | 3551 | 86% |
| 0.9.3 | STC <sub>(8.0+0.08s)</sub> | 3428 | 30 | 276 | 50% | 3428 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3567 | 32 | 214 | 51% | 3560 | 91% |
| 0.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3569 | 36 | 178 | 50% | 3567 | 89% |
| 0.9.2 | STC <sub>(8.0+0.08s)</sub> | 3432 | 27 | 328 | 48% | 3445 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3471 | 39 | 166 | 55% | 3422 | 73% |
| 0.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3403 | 42 | 152 | 55% | 3343 | 63% |
| 0.9.1 | STC <sub>(8.0+0.08s)</sub> | 3198 | 41 | 172 | 52% | 3166 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |