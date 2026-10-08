# Engine: Yakka

Author: Christopher Crone

Home: https://github.com/CJDalrymple/Yakka

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-09-24 | 2844<sub>(+75) | 3139<sub>(+107) | 3232<sub>(+120) |  |
| 1.5 | 2026-01-22 | 2769<sub>(+111) | 3032<sub>(+107) | 3112<sub>(+146) |  |
| 1.4 | 2025-11-11 | 2658 | 2925 | 2966 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Yakka+<version>&body=###%20Engine%20name%0AYakka%0A%0A###%20Version%0A1.6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-08 04:44:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 2600 --> 3300
  line "" [2658, 2769, 2844]
  line "STC (8.0+0.08s)" [2658, 2769, 2844]
  line "LTC (60.0+0.60s)" [2925, 3032, 3139]
  line "" [2966, 3112, 3232]
  line "VLTC (2m24s+1.12s)" [2966, 3112, 3232]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3232 | 35 | 222 | 47% | 3254 | 58% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 3139 | 37 | 198 | 52% | 3127 | 58% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2844 | 42 | 160 | 53% | 2822 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3112 | 22 | 592 | 49% | 3121 | 56% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3032 | 24 | 466 | 48% | 3050 | 54% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2769 | 22 | 630 | 50% | 2765 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2966 | 34 | 260 | 52% | 2948 | 48% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2925 | 30 | 336 | 56% | 2867 | 42% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2658 | 36 | 264 | 53% | 2620 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |