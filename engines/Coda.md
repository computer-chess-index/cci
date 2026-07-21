# Engine: Coda

Author: Adam Twiss

Home: https://github.com/adamtwiss/coda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.2 | 2026-07-16 | 3429<sub>(+243) | 3567<sub>(+177) | 3557<sub>(+98) |  |
| 0.9.1 | 2026-07-14 | 3186 | 3390 | 3459 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Coda+<version>&body=###%20Engine%20name%0ACoda%0A%0A###%20Version%0A0.9.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-21 06:24:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.1", "0.9.2"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3186, 3429]
  line "STC (8.0+0.08s)" [3186, 3429]
  line "LTC (60.0+0.60s)" [3390, 3567]
  line "VLTC (2m24s+1.12s)" [3459, 3557]
  line "VLTC (2m24s+1.12s)" [3459, 3557]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 36 | 178 | 52% | 3544 | 90% |
| 0.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3567 | 45 | 114 | 51% | 3557 | 88% |
| 0.9.2 | STC <sub>(8.0+0.08s)</sub> | 3429 | 32 | 240 | 48% | 3440 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3459 | 39 | 166 | 55% | 3409 | 73% |
| 0.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3390 | 42 | 152 | 55% | 3329 | 63% |
| 0.9.1 | STC <sub>(8.0+0.08s)</sub> | 3186 | 41 | 172 | 52% | 3155 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |