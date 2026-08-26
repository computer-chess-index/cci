# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260811 | 2026-08-11 | 2998<sub>(-18) | 3268<sub>(+60) | 3291<sub>(+37) |  |
| 20260704 | 2026-07-04 | 3016<sub>(+612) | 3208<sub>(+539) | 3254<sub>(+535) |  |
| 20260628 | 2026-06-28 | 2404<sub>(-2) | 2669<sub>(+22) | 2719<sub>(-23) |  |
| 20260616 | 2026-06-16 | 2406<sub>(+new) | 2647<sub>(+new) | 2742<sub>(+new) |  |
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

Generated: 2026-08-26 06:22:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704", "20260811"]
  y-axis "Elo Rating" 2400 --> 3300
  line "STC (8.0+0.08s)" [2406, 2404, 3016, 2998]
  line "STC (8.0+0.08s)" [2406, 2404, 3016, 2998]
  line "LTC (60.0+0.60s)" [2647, 2669, 3208, 3268]
  line "VLTC (2m24s+1.12s)" [2742, 2719, 3254, 3291]
  line "VLTC (2m24s+1.12s)" [2742, 2719, 3254, 3291]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3291 | 32 | 274 | 50% | 3287 | 53% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3268 | 30 | 312 | 50% | 3267 | 48% |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 2998 | 31 | 336 | 53% | 2973 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | 3254 | 31 | 312 | 54% | 3218 | 50% |
| 20260704 | LTC <sub>(60.0+0.60s)</sub> | 3208 | 30 | 320 | 53% | 3179 | 52% |
| 20260704 | STC <sub>(8.0+0.08s)</sub> | 3016 | 32 | 312 | 53% | 2986 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2719 | 46 | 148 | 51% | 2708 | 35% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2669 | 53 | 116 | 49% | 2678 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2404 | 53 | 116 | 50% | 2403 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2742 | 47 | 144 | 51% | 2731 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2647 | 47 | 148 | 46% | 2680 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2406 | 41 | 196 | 44% | 2465 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |