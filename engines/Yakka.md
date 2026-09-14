# Engine: Yakka

Author: Christopher Crone

Home: https://github.com/CJDalrymple/Yakka

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-01-22 | 2763<sub>(+109) | 3028<sub>(+105) | 3108<sub>(+146) |  |
| 1.4 | 2025-11-11 | 2654 | 2923 | 2962 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Yakka+<version>&body=###%20Engine%20name%0AYakka%0A%0A###%20Version%0A1.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-14 04:43:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5"]
  y-axis "Elo Rating" 2600 --> 3200
  line "" [2654, 2763]
  line "STC (8.0+0.08s)" [2654, 2763]
  line "LTC (60.0+0.60s)" [2923, 3028]
  line "" [2962, 3108]
  line "VLTC (2m24s+1.12s)" [2962, 3108]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3108 | 22 | 592 | 49% | 3117 | 56% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3028 | 25 | 460 | 48% | 3046 | 54% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2763 | 22 | 624 | 50% | 2761 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2962 | 34 | 260 | 52% | 2946 | 48% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2923 | 30 | 336 | 56% | 2863 | 42% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2654 | 36 | 264 | 53% | 2616 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |