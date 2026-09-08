# Engine: Publius

Author: Pawel Koziol

Home: https://github.com/nescitus/publius

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2468<sub>(-370) | 2753<sub>(-357) | 2822<sub>(-314) |  |
| 1.0 | 2025-10-19 | 2838 | 3110 | 3136 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Publius+<version>&body=###%20Engine%20name%0APublius%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-08 04:41:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2400 --> 3200
  line "" [2838, 2468]
  line "STC (8.0+0.08s)" [2838, 2468]
  line "LTC (60.0+0.60s)" [3110, 2753]
  line "" [3136, 2822]
  line "VLTC (2m24s+1.12s)" [3136, 2822]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2822 | 24 | 532 | 47% | 2846 | 37% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2753 | 25 | 516 | 50% | 2753 | 35% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2468 | 23 | 682 | 49% | 2464 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3136 | 34 | 232 | 49% | 3147 | 57% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3110 | 34 | 248 | 52% | 3083 | 55% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2838 | 36 | 232 | 53% | 2803 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |