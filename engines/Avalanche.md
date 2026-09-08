# Engine: Avalanche

Author: Yinuo Huang

Home: https://github.com/SnowballSH/Avalanche

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-08-08 | 3187<sub>(+289) | 3384<sub>(+191) | 3440<sub>(+211) |  |
| 3.0.0 | 2026-06-25 | 2898 | 3193 | 3229 |  |
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

Generated: 2026-09-08 04:36:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0"]
  y-axis "Elo Rating" 2800 --> 3500
  line "" [2898, 3187]
  line "STC (8.0+0.08s)" [2898, 3187]
  line "LTC (60.0+0.60s)" [3193, 3384]
  line "" [3229, 3440]
  line "VLTC (2m24s+1.12s)" [3229, 3440]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3440 | 26 | 350 | 52% | 3422 | 79% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3384 | 30 | 276 | 51% | 3374 | 76% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3187 | 31 | 280 | 49% | 3194 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3229 | 32 | 262 | 53% | 3200 | 59% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3193 | 34 | 240 | 53% | 3158 | 56% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2898 | 31 | 320 | 51% | 2888 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |