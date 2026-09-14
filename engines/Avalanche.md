# Engine: Avalanche

Author: Yinuo Huang

Home: https://github.com/SnowballSH/Avalanche

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-08-08 | 3190<sub>(+290) | 3387<sub>(+192) | 3443<sub>(+212) |  |
| 3.0.0 | 2026-06-25 | 2900 | 3195 | 3231 |  |
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

Generated: 2026-09-14 04:36:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "" [2900, 3190]
  line "STC (8.0+0.08s)" [2900, 3190]
  line "LTC (60.0+0.60s)" [3195, 3387]
  line "" [3231, 3443]
  line "VLTC (2m24s+1.12s)" [3231, 3443]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3443 | 26 | 358 | 52% | 3425 | 79% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3387 | 29 | 288 | 51% | 3376 | 76% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3190 | 30 | 300 | 49% | 3195 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3231 | 32 | 262 | 53% | 3202 | 59% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3195 | 34 | 240 | 53% | 3159 | 56% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2900 | 31 | 320 | 51% | 2889 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |