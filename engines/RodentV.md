# Engine: RodentV

Author: Pawel Koziol

Home: https://github.com/nescitus/Rodent-V

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2966<sub>(+41) | 3229<sub>(+46) | 3290<sub>(+18) |  |
| 1.0 | 2026-08-02 | 2925 | 3183 | 3272 |  |
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

Generated: 2026-08-09 06:28:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2900 --> 3300
  line "STC (8.0+0.08s)" [2925, 2966]
  line "STC (8.0+0.08s)" [2925, 2966]
  line "LTC (60.0+0.60s)" [3183, 3229]
  line "VLTC (2m24s+1.12s)" [3272, 3290]
  line "VLTC (2m24s+1.12s)" [3272, 3290]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3290 | 38 | 174 | 51% | 3287 | 67% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3229 | 32 | 262 | 53% | 3209 | 59% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2966 | 34 | 258 | 53% | 2939 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3272 | 33 | 250 | 49% | 3276 | 61% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3183 | 32 | 260 | 51% | 3175 | 57% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2925 | 37 | 224 | 53% | 2897 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |