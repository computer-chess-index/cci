# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10 | 2026-01-17 | 2842<sub>(+238) | 3073<sub>(+176) | 3119<sub>(+125) |  |
| 9 | 2026-01-10 | 2604<sub>(+17) | 2897<sub>(-14) | 2994<sub>(-33) |  |
| 8 | 2025-09-25 | 2587 | 2911 | 3027 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lozza+<version>&body=###%20Engine%20name%0ALozza%0A%0A###%20Version%0A10" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-21 06:27:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2587, 2604, 2842]
  line "STC (8.0+0.08s)" [2587, 2604, 2842]
  line "LTC (60.0+0.60s)" [2911, 2897, 3073]
  line "VLTC (2m24s+1.12s)" [3027, 2994, 3119]
  line "VLTC (2m24s+1.12s)" [3027, 2994, 3119]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3119 | 25 | 472 | 51% | 3108 | 50% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3073 | 24 | 484 | 51% | 3054 | 51% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2842 | 21 | 712 | 47% | 2861 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 2994 | 36 | 216 | 51% | 2984 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2897 | 40 | 182 | 48% | 2915 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2604 | 49 | 128 | 50% | 2606 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3027 | 38 | 198 | 51% | 3019 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2911 | 37 | 208 | 52% | 2892 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2587 | 43 | 176 | 51% | 2577 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |