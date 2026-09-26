# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260811 | 2026-08-11 | 3004<sub>(-21) | 3266<sub>(+50) | 3291<sub>(+28) |  |
| 20260704 | 2026-07-04 | 3025<sub>(+614) | 3216<sub>(+539) | 3263<sub>(+536) |  |
| 20260628 | 2026-06-28 | 2411<sub>(-1) | 2677<sub>(+23) | 2727<sub>(-22) |  |
| 20260616 | 2026-06-16 | 2412<sub>(+new) | 2654<sub>(+new) | 2749<sub>(+new) |  |
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

Generated: 2026-09-26 04:35:59

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704", "20260811"]
  y-axis "Elo Rating" 2400 --> 3300
  line "" [2412, 2411, 3025, 3004]
  line "STC (8.0+0.08s)" [2412, 2411, 3025, 3004]
  line "LTC (60.0+0.60s)" [2654, 2677, 3216, 3266]
  line "" [2749, 2727, 3263, 3291]
  line "VLTC (2m24s+1.12s)" [2749, 2727, 3263, 3291]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3291 | 29 | 334 | 49% | 3298 | 54% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3266 | 28 | 368 | 49% | 3278 | 49% |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 3004 | 27 | 420 | 51% | 2990 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | 3263 | 31 | 312 | 54% | 3227 | 50% |
| 20260704 | LTC <sub>(60.0+0.60s)</sub> | 3216 | 30 | 320 | 53% | 3187 | 52% |
| 20260704 | STC <sub>(8.0+0.08s)</sub> | 3025 | 32 | 312 | 53% | 2996 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2727 | 46 | 148 | 51% | 2716 | 35% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2677 | 53 | 116 | 49% | 2687 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2411 | 53 | 116 | 50% | 2410 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2749 | 47 | 144 | 51% | 2738 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2654 | 47 | 148 | 46% | 2688 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2412 | 41 | 196 | 44% | 2472 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |