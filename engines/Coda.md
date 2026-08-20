# Engine: Coda

Author: Adam Twiss

Home: https://github.com/adamtwiss/coda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.3 | 2026-07-26 | 3424<sub>(-4) | 3555<sub>(-10) | 3588<sub>(+25) |  |
| 0.9.2 | 2026-07-16 | 3428<sub>(+234) | 3565<sub>(+166) | 3563<sub>(+96) |  |
| 0.9.1 | 2026-07-14 | 3194 | 3399 | 3467 |  |
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

Generated: 2026-08-20 06:24:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.1", "0.9.2", "0.9.3"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3194, 3428, 3424]
  line "STC (8.0+0.08s)" [3194, 3428, 3424]
  line "LTC (60.0+0.60s)" [3399, 3565, 3555]
  line "VLTC (2m24s+1.12s)" [3467, 3563, 3588]
  line "VLTC (2m24s+1.12s)" [3467, 3563, 3588]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3588 | 43 | 124 | 53% | 3569 | 90% |
| 0.9.3 | LTC <sub>(60.0+0.60s)</sub> | 3555 | 32 | 228 | 51% | 3546 | 86% |
| 0.9.3 | STC <sub>(8.0+0.08s)</sub> | 3424 | 30 | 272 | 50% | 3422 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 32 | 214 | 51% | 3556 | 91% |
| 0.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3565 | 36 | 178 | 50% | 3563 | 89% |
| 0.9.2 | STC <sub>(8.0+0.08s)</sub> | 3428 | 27 | 328 | 48% | 3441 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3467 | 39 | 166 | 55% | 3417 | 73% |
| 0.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3399 | 42 | 152 | 55% | 3339 | 63% |
| 0.9.1 | STC <sub>(8.0+0.08s)</sub> | 3194 | 41 | 172 | 52% | 3162 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |