# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260811 | 2026-08-11 | 3004<sub>(-17) | 3270<sub>(+57) | 3289<sub>(+30) |  |
| 20260704 | 2026-07-04 | 3021<sub>(+614) | 3213<sub>(+540) | 3259<sub>(+536) |  |
| 20260628 | 2026-06-28 | 2407<sub>(-3) | 2673<sub>(+23) | 2723<sub>(-23) |  |
| 20260616 | 2026-06-16 | 2410<sub>(+new) | 2650<sub>(+new) | 2746<sub>(+new) |  |
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

Generated: 2026-09-15 04:35:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704", "20260811"]
  y-axis "Elo Rating" 2400 --> 3300
  line "" [2410, 2407, 3021, 3004]
  line "STC (8.0+0.08s)" [2410, 2407, 3021, 3004]
  line "LTC (60.0+0.60s)" [2650, 2673, 3213, 3270]
  line "" [2746, 2723, 3259, 3289]
  line "VLTC (2m24s+1.12s)" [2746, 2723, 3259, 3289]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3289 | 30 | 318 | 49% | 3293 | 54% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3270 | 29 | 352 | 49% | 3274 | 49% |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 3004 | 28 | 396 | 52% | 2985 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | 3259 | 31 | 312 | 54% | 3222 | 50% |
| 20260704 | LTC <sub>(60.0+0.60s)</sub> | 3213 | 30 | 320 | 53% | 3183 | 52% |
| 20260704 | STC <sub>(8.0+0.08s)</sub> | 3021 | 32 | 312 | 53% | 2992 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2723 | 46 | 148 | 51% | 2714 | 35% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2673 | 53 | 116 | 49% | 2682 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2407 | 53 | 116 | 50% | 2406 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2746 | 47 | 144 | 51% | 2734 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2650 | 47 | 148 | 46% | 2684 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2410 | 41 | 196 | 44% | 2469 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |