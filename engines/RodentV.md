# Engine: RodentV

Author: Pawel Koziol

Home: https://github.com/nescitus/Rodent-V

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2982<sub>(+50) | 3245<sub>(+52) | 3295<sub>(+12) |  |
| 1.0 | 2026-08-02 | 2932 | 3193 | 3283 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+RodentV+<version>&body=###%20Engine%20name%0ARodentV%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-27 06:28:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2900 --> 3300
  line "STC (8.0+0.08s)" [2932, 2982]
  line "STC (8.0+0.08s)" [2932, 2982]
  line "LTC (60.0+0.60s)" [3193, 3245]
  line "VLTC (2m24s+1.12s)" [3283, 3295]
  line "VLTC (2m24s+1.12s)" [3283, 3295]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3295 | 32 | 240 | 50% | 3295 | 69% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3245 | 28 | 338 | 53% | 3227 | 61% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2982 | 29 | 338 | 53% | 2958 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3283 | 33 | 250 | 49% | 3286 | 61% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3193 | 32 | 260 | 51% | 3185 | 57% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2932 | 37 | 224 | 53% | 2904 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |