# Engine: Avalanche

Author: Yinuo Huang

Home: https://github.com/SnowballSH/Avalanche

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-08-08 | 3182<sub>(+289) | 3374<sub>(+185) | 3430<sub>(+206) |  |
| 3.0.0 | 2026-06-25 | 2893 | 3189 | 3224 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Avalanche+<version>&body=###%20Engine%20name%0AAvalanche%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-23 06:22:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0"]
  y-axis "Elo Rating" 2800 --> 3500
  line "STC (8.0+0.08s)" [2893, 3182]
  line "STC (8.0+0.08s)" [2893, 3182]
  line "LTC (60.0+0.60s)" [3189, 3374]
  line "VLTC (2m24s+1.12s)" [3224, 3430]
  line "VLTC (2m24s+1.12s)" [3224, 3430]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3430 | 27 | 326 | 52% | 3416 | 79% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3374 | 32 | 232 | 51% | 3367 | 76% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3182 | 34 | 232 | 49% | 3189 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3224 | 32 | 262 | 53% | 3195 | 59% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3189 | 34 | 240 | 53% | 3152 | 56% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2893 | 31 | 320 | 51% | 2882 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |