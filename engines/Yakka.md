# Engine: Yakka

Author: Christopher Crone

Home: https://github.com/CJDalrymple/Yakka

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-01-22 | 2761<sub>(+108) | 3024<sub>(+104) | 3108<sub>(+149) |  |
| 1.4 | 2025-11-11 | 2653 | 2920 | 2959 |  |
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

Generated: 2026-09-06 04:40:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5"]
  y-axis "Elo Rating" 2600 --> 3200
  line "" [2653, 2761]
  line "STC (8.0+0.08s)" [2653, 2761]
  line "LTC (60.0+0.60s)" [2920, 3024]
  line "" [2959, 3108]
  line "VLTC (2m24s+1.12s)" [2959, 3108]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3108 | 22 | 584 | 49% | 3114 | 56% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3024 | 25 | 452 | 47% | 3044 | 55% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2761 | 22 | 624 | 50% | 2758 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2959 | 34 | 260 | 52% | 2943 | 48% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2920 | 30 | 336 | 56% | 2861 | 42% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2653 | 36 | 264 | 53% | 2615 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |