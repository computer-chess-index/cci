# Engine: Coda

Author: Adam Twiss

Home: https://github.com/adamtwiss/coda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.3 | 2026-07-26 | 3418<sub>(-4) | 3545<sub>(-15) | 3586<sub>(+29) |  |
| 0.9.2 | 2026-07-16 | 3422<sub>(+232) | 3560<sub>(+165) | 3557<sub>(+96) |  |
| 0.9.1 | 2026-07-14 | 3190 | 3395 | 3461 |  |
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

Generated: 2026-07-31 06:24:16

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.1", "0.9.2", "0.9.3"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3190, 3422, 3418]
  line "STC (8.0+0.08s)" [3190, 3422, 3418]
  line "LTC (60.0+0.60s)" [3395, 3560, 3545]
  line "VLTC (2m24s+1.12s)" [3461, 3557, 3586]
  line "VLTC (2m24s+1.12s)" [3461, 3557, 3586]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3586 | 53 | 80 | 53% | 3568 | 88% |
| 0.9.3 | LTC <sub>(60.0+0.60s)</sub> | 3545 | 34 | 192 | 51% | 3541 | 88% |
| 0.9.3 | STC <sub>(8.0+0.08s)</sub> | 3418 | 34 | 212 | 50% | 3414 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 32 | 214 | 51% | 3551 | 91% |
| 0.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3560 | 36 | 178 | 50% | 3557 | 89% |
| 0.9.2 | STC <sub>(8.0+0.08s)</sub> | 3422 | 27 | 328 | 48% | 3436 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3461 | 39 | 166 | 55% | 3413 | 73% |
| 0.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3395 | 42 | 152 | 55% | 3333 | 63% |
| 0.9.1 | STC <sub>(8.0+0.08s)</sub> | 3190 | 41 | 172 | 52% | 3156 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |