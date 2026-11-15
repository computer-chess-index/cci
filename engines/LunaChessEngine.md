# Engine: LunaChessEngine

Author: Daniele Marpino

Home: https://github.com/Spunc595/Luna-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2770<sub>(+20) | 3131<sub>(-16) | 3255<sub>(+58) |  |
| 4.1.1 | 2026-11-02 | 2750<sub>(-5) | 3147<sub>(+24) | 3197<sub>(-12) |  |
| 4.1.0 | 2026-10-16 | 2755 | 3123 | 3209 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2753<sub>(+7) | 3086<sub>(+17) | 3181<sub>(+27) |  |
| 4.1.1 | 2026-11-02 | 2746<sub>(+50) | 3069<sub>(-21) | 3154<sub>(-21) |  |
| 4.1.0 | 2026-10-16 | 2696 | 3090 | 3175 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-10-16 | 2696 | 3090 | 3175 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+LunaChessEngine+<version>&body=###%20Engine%20name%0ALunaChessEngine%0A%0A###%20Version%0A4.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-15 05:39:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1.0", "4.1.1", "4.2.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "E1: STC (8.0+0.08s)" [2755, 2750, 2770]
  line "E1: LTC (60.0+0.60s)" [3123, 3147, 3131]
  line "E1: VLTC (2m24s+1.12s)" [3209, 3197, 3255]
  line "P1: STC (8.0+0.08s)" [2696, 2746, 2753]
  line "P1: LTC (60.0+0.60s)" [3090, 3069, 3086]
  line "P1: VLTC (2m24s+1.12s)" [3175, 3154, 3181]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3255 | 26 | 388 | 49% | 3264 | 68% |
|  |  | P1 | 3181 | 37 | 188 | 49% | 3189 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3131 | 33 | 246 | 50% | 3127 | 59% |
|  |  | P1 | 3086 | 40 | 168 | 48% | 3100 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2770 | 34 | 272 | 47% | 2774 | 40% |
|  |  | P1 | 2753 | 41 | 184 | 47% | 2780 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3154 | 36 | 208 | 50% | 3152 | 59% |
|  |  | E1 | 3197 | 33 | 244 | 50% | 3200 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3069 | 42 | 166 | 54% | 3040 | 47% |
|  |  | E1 | 3147 | 39 | 180 | 51% | 3139 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2746 | 44 | 162 | 53% | 2723 | 35% |
|  |  | E1 | 2750 | 35 | 256 | 48% | 2765 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3175 | 38 | 190 | 52% | 3135 | 60% |
|  |  | E1 | 3209 | 32 | 280 | 56% | 3133 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3090 | 42 | 174 | 56% | 2935 | 48% |
|  |  | E1 | 3123 | 33 | 294 | 58% | 2973 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2696 | 38 | 240 | 54% | 2539 | 35% |
|  |  | E1 | 2755 | 34 | 298 | 57% | 2527 | 36% |