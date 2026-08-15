# Engine: Avalanche

Author: Yinuo Huang

Home: https://github.com/SnowballSH/Avalanche

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-08-08 | 3163<sub>(+277) | 3364<sub>(+183) | 3390<sub>(+174) |  |
| 3.0.0 | 2026-06-25 | 2886 | 3181 | 3216 |  |
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

Generated: 2026-08-15 06:22:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0"]
  y-axis "Elo Rating" 2800 --> 3400
  line "STC (8.0+0.08s)" [2886, 3163]
  line "STC (8.0+0.08s)" [2886, 3163]
  line "LTC (60.0+0.60s)" [3181, 3364]
  line "VLTC (2m24s+1.12s)" [3216, 3390]
  line "VLTC (2m24s+1.12s)" [3216, 3390]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3390 | 55 | 76 | 53% | 3364 | 83% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3364 | 45 | 120 | 51% | 3356 | 75% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3163 | 52 | 108 | 47% | 3190 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3216 | 32 | 262 | 53% | 3187 | 59% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3181 | 34 | 240 | 53% | 3144 | 56% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2886 | 31 | 320 | 51% | 2876 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |