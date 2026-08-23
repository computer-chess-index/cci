# Engine: RodentV

Author: Pawel Koziol

Home: https://github.com/nescitus/Rodent-V

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2979<sub>(+48) | 3241<sub>(+50) | 3295<sub>(+14) |  |
| 1.0 | 2026-08-02 | 2931 | 3191 | 3281 |  |
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

Generated: 2026-08-23 06:28:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2900 --> 3300
  line "STC (8.0+0.08s)" [2931, 2979]
  line "STC (8.0+0.08s)" [2931, 2979]
  line "LTC (60.0+0.60s)" [3191, 3241]
  line "VLTC (2m24s+1.12s)" [3281, 3295]
  line "VLTC (2m24s+1.12s)" [3281, 3295]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3295 | 33 | 236 | 50% | 3294 | 69% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3241 | 29 | 314 | 53% | 3221 | 60% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2979 | 29 | 338 | 53% | 2955 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3281 | 33 | 250 | 49% | 3283 | 61% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3191 | 32 | 260 | 51% | 3182 | 57% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2931 | 37 | 224 | 53% | 2903 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |