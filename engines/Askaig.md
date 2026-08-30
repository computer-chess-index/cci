# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260811 | 2026-08-11 | 3005<sub>(-12) | 3272<sub>(+63) | 3291<sub>(+36) |  |
| 20260704 | 2026-07-04 | 3017<sub>(+613) | 3209<sub>(+539) | 3255<sub>(+535) |  |
| 20260628 | 2026-06-28 | 2404<sub>(-2) | 2670<sub>(+23) | 2720<sub>(-23) |  |
| 20260616 | 2026-06-16 | 2406<sub>(+new) | 2647<sub>(+new) | 2743<sub>(+new) |  |
| 20260615 | 2026-06-15 |  |  |  |  |
| 20260614 | 2026-06-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Askaig+<version>&body=###%20Engine%20name%0AAskaig%0A%0A###%20Version%0A20260811" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 13:06:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704", "20260811"]
  y-axis "Elo Rating" 2400 --> 3300
  line "" [2406, 2404, 3017, 3005]
  line "STC (8.0+0.08s)" [2406, 2404, 3017, 3005]
  line "LTC (60.0+0.60s)" [2647, 2670, 3209, 3272]
  line "" [2743, 2720, 3255, 3291]
  line "VLTC (2m24s+1.12s)" [2743, 2720, 3255, 3291]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3291 | 31 | 286 | 50% | 3289 | 53% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3272 | 30 | 328 | 50% | 3268 | 49% |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 3005 | 30 | 356 | 53% | 2977 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | 3255 | 31 | 312 | 54% | 3218 | 50% |
| 20260704 | LTC <sub>(60.0+0.60s)</sub> | 3209 | 30 | 320 | 53% | 3179 | 52% |
| 20260704 | STC <sub>(8.0+0.08s)</sub> | 3017 | 32 | 312 | 53% | 2988 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2720 | 46 | 148 | 51% | 2709 | 35% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2670 | 53 | 116 | 49% | 2680 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2404 | 53 | 116 | 50% | 2403 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2743 | 47 | 144 | 51% | 2731 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2647 | 47 | 148 | 46% | 2681 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2406 | 41 | 196 | 44% | 2465 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |